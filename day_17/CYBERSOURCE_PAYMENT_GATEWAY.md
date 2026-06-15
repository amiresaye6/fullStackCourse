# 💳 CyberSource Secure Acceptance — Express.js Integration Guide


---

## 📚 Table of Contents

1. [What Is This Payment Gateway?](#1-what-is-this-payment-gateway)
2. [How It Works (The Flow)](#2-how-it-works-the-flow)
3. [Key Concepts You Must Know](#3-key-concepts-you-must-know)
4. [Environment Setup](#4-environment-setup)
5. [One-Time Payment (Sale) — Full Express Example](#5-one-time-payment-sale--full-express-example)
6. [Recurring Payments (Subscriptions)](#6-recurring-payments-subscriptions)
7. [Webhook / Notification Handler](#7-webhook--notification-handler)
8. [Subscription Cancellation](#8-subscription-cancellation)
9. [Testing — Test Cards](#9-testing--test-cards)
10. [Important URLs](#10-important-urls)
11. [Official Resources](#11-official-resources)
12. [Common Mistakes (From Real Support Emails)](#12-common-mistakes-from-real-support-emails)

---

## 1. What Is This Payment Gateway?

**CyberSource Secure Acceptance (Hosted Checkout)** is a payment gateway by Visa/CyberSource.

Instead of handling card data on your own server (which requires PCI compliance), you **redirect the user to CyberSource's hosted page**, they enter their card info there, and CyberSource sends the result back to your server via a **webhook (server notification)** and also redirects the user back to your app.

### Why use it?
- **No PCI scope on your server** — card data never touches your backend
- Supports **one-time payments** and **recurring/subscription billing**
- Supports **3D Secure**, **Apple Pay**, **Google Pay**, **Click to Pay**
- Used heavily in the Arab Bank / Palestine region via ILS (Israeli Shekel) currency

---

## 2. How It Works (The Flow)

```
User clicks "Pay"
       │
       ▼
Your Express Server
  ├─ Generates a signed form (HMAC-SHA256 signature)
  └─ POSTs form to CyberSource
       │
       ▼
CyberSource Hosted Checkout Page
  └─ User enters card details
       │
       ├── [Background] POST to your Notification URL (webhook)
       │         ← This is where you update your DB / mark payment successful
       │
       └── [Foreground] Redirect user to your Customer Response URL
                 ← This is what the user SEES after payment
```

**Two callbacks:**
| Callback | Direction | Purpose |
|---|---|---|
| **Notification URL** | Server → Your backend (silent) | Where you do DB updates, business logic |
| **Customer Response URL** | CyberSource → User's browser | What the user sees after paying |

---

## 3. Key Concepts You Must Know

### Signed Fields
CyberSource uses **HMAC-SHA256** to verify requests haven't been tampered with.

- You define which fields are signed in `signed_field_names`
- You compute a signature over those fields using your **Secret Key**
- CyberSource verifies the signature on their side

### Transaction Types
| Type | Meaning |
|---|---|
| `sale` | Capture money immediately ✅ (use this for most cases) |
| `authorization` | Only reserve/hold money, capture later |
| `sale,create_payment_token` | One-time sale + save card for future use |
| `create_payment_token` | Just save a card (no charge) |
| `sale,subscription` | One-time charge + create a subscription |
| `subscription` | Create a subscription (recurring) |

> ⚠️ **Common mistake:** Using `authorization` instead of `sale`. The bank (Arab Bank support) explicitly requires `sale` for live transactions.

### Required Billing Fields
| Field | Value |
|---|---|
| `bill_to_address_state` | `PS_RBH` (Ramallah, Palestine) |
| `bill_to_address_postal_code` | `97000` |

These are **mandatory** — the gateway rejects transactions without them. You can hardcode them as static values.

---

## 4. Environment Setup

```bash
npm init -y
npm install express crypto dotenv body-parser
```

**.env file:**
```env
ACCESS_KEY=your_access_key_here
SECRET_KEY=your_secret_key_here
PROFILE_ID=72501963-6F3E-4697-A27C-D99792D1DC66
PORT=3000
```

**Project structure:**
```
project/
├── .env
├── index.js          ← main server
├── payment.js        ← payment helper functions
└── views/
    └── pay.html      ← optional checkout page
```

---

## 5. One-Time Payment (Sale) — Full Express Example

### `payment.js` — Helper Functions

```js
const crypto = require('crypto');

/**
 * Signs the CyberSource fields using HMAC-SHA256
 * @param {Object} params - All form fields
 * @param {string} secretKey - Your CyberSource secret key
 * @returns {string} - Base64 encoded signature
 */
function sign(params, secretKey) {
  const signedFieldNames = params.signed_field_names.split(',');
  
  // Build the string to sign: "field_name=value,field_name2=value2,..."
  const dataToSign = signedFieldNames
    .map(field => `${field}=${params[field]}`)
    .join(',');
  
  return crypto
    .createHmac('sha256', secretKey)
    .update(dataToSign)
    .digest('base64');
}

/**
 * Generates a UUID for transaction_uuid
 */
function generateUUID() {
  return crypto.randomUUID();
}

/**
 * Generates the signed_date_time in CyberSource format
 * Format: YYYY-MM-DDThh:mm:ssZ
 */
function getSignedDateTime() {
  return new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
}

module.exports = { sign, generateUUID, getSignedDateTime };
```

---

### `index.js` — Express Server (One-Time Payment)

```js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sign, generateUUID, getSignedDateTime } = require('./payment');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const CONFIG = {
  ACCESS_KEY: process.env.ACCESS_KEY,
  SECRET_KEY: process.env.SECRET_KEY,
  PROFILE_ID: process.env.PROFILE_ID,
};

// ─────────────────────────────────────────────
// ROUTE: Show Payment Button / Form
// ─────────────────────────────────────────────
app.get('/pay', (req, res) => {
  const userId = req.query.userId || 'user_123'; // get from your auth system
  
  const transactionUuid = generateUUID();
  const signedDateTime = getSignedDateTime();
  const referenceNumber = `REF-${Date.now()}`; // unique per transaction

  const params = {
    access_key: CONFIG.ACCESS_KEY,
    profile_id: CONFIG.PROFILE_ID,
    transaction_uuid: transactionUuid,
    signed_date_time: signedDateTime,
    locale: 'en',
    transaction_type: 'sale',           // ← MUST be "sale", not "authorization"
    reference_number: referenceNumber,
    amount: '29.90',
    currency: 'ILS',
    
    // Required billing fields (can be hardcoded for Palestine)
    bill_to_address_state: 'PS_RBH',
    bill_to_address_postal_code: '97000',
    
    // Your custom data (user tracking)
    merchant_defined_data1: userId,
    
    // Fields to sign (unsigned_field_names left empty)
    unsigned_field_names: '',
    signed_field_names: [
      'access_key',
      'profile_id',
      'transaction_uuid',
      'signed_field_names',
      'unsigned_field_names',
      'signed_date_time',
      'locale',
      'transaction_type',
      'reference_number',
      'amount',
      'bill_to_address_postal_code',
      'bill_to_address_state',
      'currency',
      'merchant_defined_data1',
    ].join(','),
  };

  // Compute signature
  params.signature = sign(params, CONFIG.SECRET_KEY);

  // Send an auto-submit form to CyberSource
  // (or render this as a proper page)
  const CYBERSOURCE_URL = 'https://secureacceptance.cybersource.com/pay'; // Production
  // const CYBERSOURCE_URL = 'https://testsecureacceptance.cybersource.com/pay'; // Sandbox

  const formFields = Object.entries(params)
    .map(([key, val]) => `<input type="hidden" name="${key}" value="${val}" />`)
    .join('\n');

  res.send(`
    <html>
      <body>
        <p>Redirecting to payment...</p>
        <form id="payment_form" method="POST" action="${CYBERSOURCE_URL}">
          ${formFields}
        </form>
        <script>document.getElementById('payment_form').submit();</script>
      </body>
    </html>
  `);
});

// ─────────────────────────────────────────────
// ROUTE: Customer Response (what the USER sees)
// ─────────────────────────────────────────────
app.post('/payment/response', (req, res) => {
  const { decision, reason_code, req_reference_number } = req.body;
  
  if (decision === 'ACCEPT') {
    res.send('<h1>✅ Payment Successful!</h1>');
  } else if (decision === 'CANCEL') {
    res.send('<h1>❌ Payment Cancelled</h1>');
  } else {
    res.send(`<h1>⚠️ Payment Failed (Reason: ${reason_code})</h1>`);
  }
});

// ─────────────────────────────────────────────
// ROUTE: Notification (silent webhook from CyberSource)
// ─────────────────────────────────────────────
app.post('/payment/notification', (req, res) => {
  const data = req.body;
  
  console.log('📩 CyberSource Notification received:', data);
  
  const { decision, req_reference_number, req_merchant_defined_data1: userId } = data;
  
  if (decision === 'ACCEPT') {
    // ✅ Update your database here
    console.log(`Payment successful for user ${userId}, ref: ${req_reference_number}`);
    // e.g. db.markUserAsPaid(userId);
  }
  
  // CyberSource expects a 200 OK
  res.status(200).send('OK');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
```

---

## 6. Recurring Payments (Subscriptions)

For subscriptions, you use **two transaction types**:

| Goal | `transaction_type` |
|---|---|
| First charge + start subscription | `sale,subscription` |
| Only save card (no charge) | `create_payment_token` |
| First charge + save card | `sale,create_payment_token` |

### Additional Fields Needed for Subscriptions

```js
const params = {
  // ... all your existing fields ...
  
  transaction_type: 'sale,subscription',   // ← Changed

  // Subscription / token fields
  payment_token: '',                        // blank = create new token
  
  // Optional: recurring schedule info (if your profile supports it)
  // These may vary by your CyberSource profile configuration
  recurring_amount: '29.90',
  recurring_start_date: '20260101',         // YYYYMMDD
  recurring_frequency: '30',               // every 30 days

  // Add these to signed_field_names too!
  signed_field_names: [
    // ... existing fields ...
    'payment_token',
    'recurring_amount',
    'recurring_start_date',
    'recurring_frequency',
  ].join(','),
};
```

### How Recurring Billing Actually Works

```
1. User pays first time → transaction_type: "sale,subscription"
   └─ CyberSource returns a payment_token in the notification

2. You save the payment_token in your DB (linked to userId)

3. Each month, you call CyberSource REST API to charge the saved token:
   POST https://apitest.cybersource.com/pts/v2/payments
   (with the saved payment_token)

4. No user interaction needed for recurring charges
```

### Saving the Token from the Notification

```js
app.post('/payment/notification', (req, res) => {
  const data = req.body;
  
  if (data.decision === 'ACCEPT') {
    const userId = data.req_merchant_defined_data1;
    const paymentToken = data.payment_token; // Save this!
    
    // Save to your database:
    // db.savePaymentToken(userId, paymentToken);
    
    console.log(`Subscription started for ${userId}, token: ${paymentToken}`);
  }
  
  res.status(200).send('OK');
});
```

---

## 7. Webhook / Notification Handler

The **Notification URL** is called silently by CyberSource after every transaction. This is your source of truth.

```
Notification URL (used in the email):
https://us-central1-al-mohami.cloudfunctions.net/cybersourceNotification

Customer Response URL:
https://us-central1-al-mohami.cloudfunctions.net/paymentCancel
(Note: "paymentCancel" is just the name — it handles all outcomes, not just cancel)
```

### Notification Payload Fields

| Field | Description |
|---|---|
| `decision` | `ACCEPT`, `DECLINE`, `CANCEL`, `ERROR`, `REVIEW` |
| `reason_code` | Numeric code (100 = success) |
| `req_reference_number` | Your reference number |
| `req_merchant_defined_data1` | Your custom data (e.g. userId) |
| `payment_token` | Saved card token (for subscriptions) |
| `auth_code` | Authorization code |
| `req_amount` | Amount charged |
| `req_currency` | Currency used |

### ✅ Always respond with 200 OK
If you return anything other than 200, CyberSource may retry the notification.

---

## 8. Subscription Cancellation

CyberSource Secure Acceptance (Hosted Checkout) **doesn't have a built-in cancel button**. You need to handle this via the **CyberSource REST API** or by simply **stopping future charges** on your side.

### Option A — Stop charging on your end (simplest)
```js
// In your database, mark subscription as cancelled
// Just don't call the recurring charge API anymore

app.post('/cancel-subscription', async (req, res) => {
  const { userId } = req.body;
  
  // Mark as cancelled in your DB
  // await db.cancelSubscription(userId);
  
  res.json({ success: true, message: 'Subscription cancelled' });
});
```

### Option B — Delete token via CyberSource REST API
```js
const fetch = require('node-fetch');

async function deletePaymentToken(paymentToken) {
  const response = await fetch(
    `https://apitest.cybersource.com/tms/v1/paymentinstruments/${paymentToken}`,
    {
      method: 'DELETE',
      headers: {
        // CyberSource REST API uses HTTP Signature auth
        // See: https://developer.cybersource.com/api/reference/api-reference.html
        'Content-Type': 'application/json',
      },
    }
  );
  
  return response.ok;
}
```

> 💡 For the REST API, you'll need to implement HTTP Signature authentication.
> See the CyberSource REST API docs linked below.

---

## 9. Testing — Test Cards

**Sandbox URL:** `https://testsecureacceptance.cybersource.com/pay`

Full list: https://developer.cybersource.com/hello-world/testing-guide-v1.html

| Card Number | Type | Result |
|---|---|---|
| `4111111111111111` | Visa | ✅ Approved |
| `5555555555554444` | Mastercard | ✅ Approved |
| `4000000000000002` | Visa | ❌ Declined |
| `4000000000000127` | Visa | ❌ CVN Mismatch |

- **Expiry date:** Any future date (e.g. `12/2030`)
- **CVN:** `123`
- **Name:** Any name

---

## 10. Important URLs

### Hosted Checkout Endpoints
| Environment | URL |
|---|---|
| 🧪 **Sandbox/Test** | `https://testsecureacceptance.cybersource.com/pay` |
| 🌍 **Production** | `https://secureacceptance.cybersource.com/pay` |
| 🇮🇳 **Production (India)** | `https://secureacceptance.in.cybersource.com/pay` |

### Sandbox Dashboard Login
`https://ebctest.cybersource.com/ebctest/login/Login.do`

### Live Demo
`https://vasdemos.visa.com/unifiedCheckout`

---

## 11. Official Resources

| Resource | Link |
|---|---|
| Unified Checkout Overview | https://developer.cybersource.com/docs/cybs/en-us/unified-checkout/developer/all/rest/unified-checkout/uc-about-guide.html |
| API Reference (Capture Context) | https://developer.cybersource.com/docs/cybs/en-us/unified-checkout/developer/all/rest/unified-checkout/uc-setup-capture-context.html |
| SDK Documentation | https://developer.cybersource.com/docs/cybs/en-us/unified-checkout/developer/all/rest/unified-checkout/uc-getting-started-cs-setup-intro.html |
| Test Cards Guide | https://developer.cybersource.com/hello-world/testing-guide-v1.html |
| GitHub Samples (Node + Java) | https://github.com/Cybersource |

### Video Tutorials
1. **Card Payment + 3D Secure:** https://youtu.be/cf6pwPvDoiE
2. **Apple Pay, Google Pay, Click To Pay:** https://youtu.be/3FPs9a9AuNY

---

## 12. Common Mistakes (From Real Support Emails)

These are actual issues that came up during integration with Arab Bank CyberSource:

### ❌ Mistake 1: Using `authorization` instead of `sale`
```js
// WRONG ❌
transaction_type: 'authorization'

// CORRECT ✅
transaction_type: 'sale'
```
`authorization` only holds/reserves funds. `sale` captures immediately.

---

### ❌ Mistake 2: Missing billing address fields
```js
// WRONG ❌ — missing state and postal code
{ amount: '29.90', currency: 'ILS' }

// CORRECT ✅ — always include these
{
  amount: '29.90',
  currency: 'ILS',
  bill_to_address_state: 'PS_RBH',       // Palestine - Ramallah
  bill_to_address_postal_code: '97000',
}
```

---

### ❌ Mistake 3: Not including billing fields in `signed_field_names`
```js
// WRONG ❌ — fields exist but aren't signed
signed_field_names: 'access_key,profile_id,...,amount,currency'

// CORRECT ✅ — all fields must be in signed_field_names
signed_field_names: '...amount,bill_to_address_postal_code,bill_to_address_state,currency...'
```

---

### ❌ Mistake 4: Using the wrong Hosted Checkout URL
```js
// WRONG for sandbox ❌
'https://secureacceptance.cybersource.com/pay'

// CORRECT for sandbox ✅
'https://testsecureacceptance.cybersource.com/pay'
```

---

### ❌ Mistake 5: Confusing Notification URL vs Customer Response URL

| URL | Called by | User sees it? | Use for |
|---|---|---|---|
| **Notification URL** | CyberSource server | No (silent) | DB updates, business logic |
| **Customer Response URL** | Browser redirect | Yes | Thank you page, UX |

Don't put business logic in the Customer Response URL — the user might close the tab before it loads. Always use the **Notification URL** as your source of truth.

---

## 🎬 Video Script Notes

**Suggested 30-min breakdown:**

| Time | Topic |
|---|---|
| 0:00–3:00 | What CyberSource is & why use hosted checkout |
| 3:00–7:00 | The payment flow diagram (Section 2) |
| 7:00–12:00 | Setting up Express + signing logic (Sections 4 & 5) |
| 12:00–18:00 | Live demo: one-time payment in sandbox |
| 18:00–23:00 | Recurring payments / subscriptions (Section 6) |
| 23:00–27:00 | Webhook notification handler (Section 7) |
| 27:00–30:00 | Cancellation + common mistakes (Sections 8 & 12) |

---

*Built from: CyberSource Arab Bank integration support emails (Dec 2025 – Apr 2026)*

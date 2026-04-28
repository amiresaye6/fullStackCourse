
// error handlign >> try catch

// try {
//     const value = 10;
//     // value = 20;
//     const data = fetch("batatex").then(res => {
//         if (!res.ok) {
//             throw new Error("data not found")
//         }

//     }).then(data => data)
//         .catch(err => console.log(err.message)
//         )
//     console.log(data);

// } catch (error) {
//     console.log(error.message);

// }


console.log("test after error");

const data = "thi sis a normal string";

try {
    const parsedData = JSON.parse(data); // willl throw an error
    console.log(parsedData);
} catch (error) { // will catch this error
    console.log(error.message);
    const parsedData = "ths is a temp value because the parese failed"
} finally {
    console.log("this will be running nomatter the expression ");

}

async function getData() {
    try {
        const res = await fetch("wrong-url");

        if (!res.ok) {
            throw new Error("Request failed");
        }

        const data = await res.json();
        console.log(data);

    } catch (err) {
        console.log("Error:", err.message);
    }
}

getData();
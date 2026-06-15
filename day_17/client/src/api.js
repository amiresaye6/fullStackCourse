const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    };
};

export const authAPI = {
    register: async (name, email, password) => {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });
        return res.json();
    },
    login: async (email, password) => {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        return res.json();
    },
};

export const habitsAPI = {
    getAll: async () => {
        const res = await fetch(`${BASE_URL}/habits`, {
            method: 'GET',
            headers: getHeaders(),
        });
        return res.json();
    },
    create: async (title, description, frequancy) => {
        const res = await fetch(`${BASE_URL}/habits`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({ title, description, frequancy }), // Matching backend spelling
        });
        return res.json();
    },
    toggleComplete: async (id) => {
        const res = await fetch(`${BASE_URL}/habits/${id}`, {
            method: 'PUT',
            headers: getHeaders(),
        });
        return res.json();
    },
};
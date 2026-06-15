import { useState } from 'react';
import { authAPI } from '../api';

export default function AuthForm({ isLogin, onAuthSuccess, setView }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            let data;
            if (isLogin) {
                data = await authAPI.login(email, password);
            } else {
                data = await authAPI.register(name, email, password);
            }

            // If backend returns the token, auth was successful
            if (data && data.token) {
                onAuthSuccess(data.user, data.token);
            } else if (data && data.message) {
                setError(data.message);
            } else {
                setError('Something went wrong. Please check your credentials.');
            }
        } catch (err) {
            setError('Failed to connect to the authentication server.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-gray-50/50">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-xs">

                {/* Context Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                        {isLogin ? 'Welcome back back to HabitFlow' : 'Create your account'}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        {isLogin ? 'Pick up right where you left off' : 'Start tracking your routines today'}
                    </p>
                </div>

                {/* Error Callout */}
                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600 font-medium animate-shake">
                        {error}
                    </div>
                )}

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Full Name</label>
                            <input
                                type="text"
                                required
                                placeholder="Amir Alsayed"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-gray-50/50"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-gray-50/50"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Password</label>
                        <input
                            type="password"
                            required
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-gray-50/50"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium text-sm py-3 rounded-lg shadow-xs transition-colors duration-150 mt-2 cursor-pointer"
                    >
                        {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Get Started'}
                    </button>
                </form>

                {/* Dynamic View Toggle Link */}
                <div className="mt-6 text-center text-sm">
                    <span className="text-gray-500">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                    </span>
                    <button
                        onClick={() => setView(isLogin ? 'register' : 'login')}
                        className="text-indigo-600 font-semibold hover:text-indigo-700 focus:outline-none"
                    >
                        {isLogin ? 'Sign up here' : 'Log in here'}
                    </button>
                </div>

            </div>
        </div>
    );
}
export default function Header({ user, totalHabits, onLogout, setView }) {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setView('dashboard')}>
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        H
                    </div>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">Habit<span className="text-indigo-600">Flow</span></span>
                </div>

                {/* Navigation & User Actions */}
                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            {/* Habit Counter Pill */}
                            <div className="bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-indigo-700">
                                Habits: <span className="font-bold">{totalHabits}</span>
                            </div>

                            {/* User Greeting */}
                            <span className="hidden sm:inline text-sm text-gray-600 font-medium">
                                Hi, <span className="text-gray-900 font-semibold">{user.name}</span>
                            </span>

                            {/* Logout Button */}
                            <button
                                onClick={onLogout}
                                className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors duration-150 px-3 py-1.5 rounded-md hover:bg-red-50"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setView('login')}
                                className="text-sm font-medium text-gray-600 hover:text-indigo-600 px-3 py-2 transition-all"
                            >
                                Log In
                            </button>
                            <button
                                onClick={() => setView('register')}
                                className="text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm transition-all"
                            >
                                Sign Up
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
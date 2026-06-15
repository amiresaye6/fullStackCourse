import { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AuthForm from './components/AuthForm'; // Simple standard structural login/register wrapper

export default function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('login');
  const [totalHabitsCount, setTotalHabitsCount] = useState(0);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('token');
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setView('dashboard');
    }
  }, []);

  const handleAuthSuccess = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setView('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setView('login');
  };

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-800 font-sans antialiased">
      <Header 
        user={user} 
        totalHabits={totalHabitsCount} 
        onLogout={handleLogout} 
        setView={setView} 
      />
      
      <main className="animate-fadeIn">
        {view === 'dashboard' && user && (
          <Dashboard setTotalHabitsCount={setTotalHabitsCount} />
        )}
        {(view === 'login' || view === 'register') && !user && (
          <AuthForm isLogin={view === 'login'} onAuthSuccess={handleAuthSuccess} setView={setView} />
        )}
      </main>
    </div>
  );
}
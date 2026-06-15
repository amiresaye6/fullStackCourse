import { useState, useEffect } from 'react';
import HabitCard from './HabitCard';
import { habitsAPI } from '../api';

export default function Dashboard({ setTotalHabitsCount }) {
    const [habits, setHabits] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [frequancy, setFrequancy] = useState('daily');
    const [loading, setLoading] = useState(true);

    const fetchHabits = async () => {
        try {
            const data = await habitsAPI.getAll();
            if (data.habits) {
                setHabits(data.habits);
                // Sync total counts directly with the header state
                setTotalHabitsCount(data.totalHabits || data.habits.length);
            }
        } catch (err) {
            console.error('Error fetching habits:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHabits();
    }, []);

    const handleCreateHabit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        try {
            const data = await habitsAPI.create(title, description, frequancy);
            if (data.habit) {
                const updatedHabits = [data.habit, ...habits];
                setHabits(updatedHabits);
                // Increment global header counter
                setTotalHabitsCount(prev => prev + 1);
                setTitle('');
                setDescription('');
            }
        } catch (err) {
            console.error('Error creating habit:', err);
        }
    };

    const handleToggleComplete = async (id) => {
        try {
            const data = await habitsAPI.toggleComplete(id);
            if (data.habit) {
                setHabits(habits.map(h => h._id === id ? data.habit : h));
            }
        } catch (err) {
            console.error('Error updating habit status:', err);
        }
    };

    if (loading) {
        return <div className="text-center py-20 text-gray-500 font-medium">Loading your routines...</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Creation panel Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs h-fit">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Build a New Habit</h2>
                <form onSubmit={handleCreateHabit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Habit Name</label>
                        <input
                            type="text" required placeholder="E.g., Read Books" value={title} onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-gray-50/50"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Description</label>
                        <textarea
                            rows="2" placeholder="Describe your goal..." value={description} onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-gray-50/50"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Frequency</label>
                        <select
                            value={frequancy} onChange={(e) => setFrequancy(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white"
                        >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2.5 rounded-lg shadow-xs transition-colors duration-150">
                        Add Habit
                    </button>
                </form>
            </div>

            {/* Habit Columns rendering based on Frequency configuration status */}
            <div className="lg:col-span-2 space-y-8">
                {/* Daily Section */}
                <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>Daily Routines</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {habits.filter(h => h.frequancy === 'daily').length > 0 ? (
                            habits.filter(h => h.frequancy === 'daily').map(h => (
                                <HabitCard key={h._id} habit={h} onToggleComplete={handleToggleComplete} />
                            ))
                        ) : (
                            <p className="text-sm text-gray-400 col-span-2 italic">No daily habits scheduled yet.</p>
                        )}
                    </div>
                </div>

                {/* Weekly Section */}
                <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span>Weekly Goals</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {habits.filter(h => h.frequancy === 'weekly').length > 0 ? (
                            habits.filter(h => h.frequancy === 'weekly').map(h => (
                                <HabitCard key={h._id} habit={h} onToggleComplete={handleToggleComplete} />
                            ))
                        ) : (
                            <p className="text-sm text-gray-400 col-span-2 italic">No weekly habits scheduled yet.</p>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
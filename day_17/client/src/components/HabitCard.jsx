export default function HabitCard({ habit, onToggleComplete }) {
    // Check if completed today (comparing YYYY-MM-DD format)
    const todayStr = new Date().toISOString().split('T')[0];
    const isCompletedToday = habit.completedDates.some(
        (date) => date.split('T')[0] === todayStr
    );

    return (
        <div className={`p-5 bg-white border rounded-xl shadow-xs transition-all duration-200 flex items-start justify-between gap-4 ${isCompletedToday ? 'border-emerald-200 bg-emerald-50/20' : 'border-gray-200 hover:border-gray-300'
            }`}>
            <div className="space-y-1 flex-1">
                <div className="flex items-center space-x-2">
                    <h3 className={`font-semibold text-base transition-all ${isCompletedToday ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                        {habit.title}
                    </h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${habit.frequancy === 'daily' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                        {habit.frequancy}
                    </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed wrap-break-word">{habit.description}</p>

                {/* Metadata section */}
                <div className="pt-2 text-xs text-gray-400 flex flex-wrap gap-x-4 gap-y-1">
                    <span>Created: {new Date(habit.createdAt).toLocaleDateString()}</span>
                    <span>Streak: {habit.completedDates.length} days completed</span>
                </div>
            </div>

            {/* Modern Action Toggle Button */}
            <button
                onClick={() => onToggleComplete(habit._id)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all duration-200 cursor-pointer shrink-0 ${isCompletedToday
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm hover:bg-emerald-700'
                        : 'border-gray-300 text-transparent hover:border-indigo-500 hover:text-indigo-500'
                    }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
}
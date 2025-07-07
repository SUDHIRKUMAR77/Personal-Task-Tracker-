import React from 'react';

const TaskFilter = ({ filter, setFilter, counts }) => {
  const filters = ['All', 'Completed', 'Pending'];
  return (
    <div className="flex justify-center gap-4 mb-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 border rounded-full transition duration-200 ${
            filter === f
              ? 'bg-blue-600 text-white'
              : 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700'
          }`}
        >
          {f} ({counts[f] || 0})
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { getTasks, saveTasks, getUsername, getName } from './utils/localStorage';

const App = () => {
  const [username, setUsername] = useState(getUsername());
  const [name, setName] = useState(getName());
  const [tasks, setTasks] = useState(getTasks());
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    return getUsername() ? true : localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (username) {
      setDarkMode(true);
      localStorage.setItem('darkMode', true);
    }
  }, [username]);

  const handleLogin = (username, name) => {
    setUsername(username);
    setName(name);
  };

  const addTask = ({ title, description, priority, dueDate }) => {
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority: priority || 'Medium',
      dueDate: dueDate || null,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    const updated = [...tasks, newTask];
    setTasks(updated);
    saveTasks(updated);
  };

  const editTask = (id, updatedTask) => {
    const updated = tasks.map((t) => (t.id === id ? { ...t, ...updatedTask } : t));
    setTasks(updated);
    saveTasks(updated);
  };

  const toggleTask = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
    saveTasks(updated);
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updated = tasks.filter((t) => t.id !== id);
      setTasks(updated);
      saveTasks(updated);
    }
  };

  const filteredTasks = tasks
    .filter((t) => {
      if (filter === 'All') return true;
      return filter === 'Completed' ? t.completed : !t.completed;
    })
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
    );

  const counts = {
    All: tasks.length,
    Completed: tasks.filter((t) => t.completed).length,
    Pending: tasks.filter((t) => !t.completed).length,
  };

  if (!username) return <Login onLogin={handleLogin} />;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-black dark:text-white">
            Welcome, {name || username}
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <TaskForm onAdd={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} counts={counts} />
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </div>
    </div>
  );
};

export default App;
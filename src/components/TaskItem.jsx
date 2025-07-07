import React, { useState } from 'react';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || '');
  const [editPriority, setEditPriority] = useState(task.priority || 'Medium');
  const [editDueDate, setEditDueDate] = useState(task.dueDate || '');

  const handleEdit = () => {
    if (!editTitle.trim()) {
      alert('Task title is required');
      return;
    }
    onEdit(task.id, {
      title: editTitle,
      description: editDescription,
      priority: editPriority,
      dueDate: editDueDate || null,
    });
    setIsEditing(false);
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'High':
        return 'bg-red-100 dark:bg-red-900 border-red-500';
      case 'Medium':
        return 'bg-yellow-100 dark:bg-yellow-900 border-yellow-500';
      case 'Low':
        return 'bg-blue-100 dark:bg-blue-900 border-blue-500';
      default:
        return 'bg-white dark:bg-gray-800';
    }
  };

  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-start border rounded-lg p-4 shadow-sm mb-4 transition-all duration-300 ${getPriorityColor()} ${
        task.completed ? 'opacity-75' : ''
      } hover:shadow-md animate-slide-in`}
    >
      {isEditing ? (
        <div className="w-full">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Description (optional)"
          ></textarea>
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input
            type="date"
            value={editDueDate}
            onChange={(e) => setEditDueDate(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1">
            <h3 className={`font-semibold ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'dark:text-white'}`}>
              {task.title}
            </h3>
            {task.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300">{task.description}</p>
            )}
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              <p>Created: {new Date(task.createdAt).toLocaleString()}</p>
              {task.dueDate && (
                <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
              )}
              <p>Priority: {task.priority}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 mt-2 sm:mt-0">
            <button
              onClick={() => onToggle(task.id)}
              className="text-sm px-3 py-1 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
            >
              {task.completed ? 'Mark Pending' : 'Mark Done'}
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-sm px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
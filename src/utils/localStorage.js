export const saveTasks = (tasks) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

export const getTasks = () => {
  try {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error retrieving tasks from localStorage:', error);
    return [];
  }
};

export const saveUsername = (username) => {
  try {
    localStorage.setItem('username', username);
  } catch (error) {
    console.error('Error saving username to localStorage:', error);
  }
};

export const getUsername = () => {
  try {
    return localStorage.getItem('username') || '';
  } catch (error) {
    console.error('Error retrieving username from localStorage:', error);
    return '';
  }
};

export const saveName = (name) => {
  try {
    localStorage.setItem('name', name);
  } catch (error) {
    console.error('Error saving name to localStorage:', error);
  }
};

export const getName = () => {
  try {
    return localStorage.getItem('name') || '';
  } catch (error) {
    console.error('Error retrieving name from localStorage:', error);
    return '';
  }
};
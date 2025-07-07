# Personal Task Tracker

## 📖 Description
Personal Task Tracker is a React-based web application designed to help users manage their tasks efficiently. It features a simple login system using localStorage, robust task management functionalities (add, edit, delete, toggle completion), task filtering, and search capabilities. The application is enhanced with bonus features such as task priority levels, due dates, dark mode toggle, and smooth animations, all styled with Tailwind CSS for a responsive and modern user interface. Data persistence is handled via localStorage with error handling to ensure reliability.

## 🚀 Features
- **Login System**: Username-based login stored in localStorage (no real authentication required).
- **Task Management**: Add new tasks, edit tasks inline, delete tasks with confirmation prompts, and toggle task completion status.
- **Task Filtering**: Filter tasks by All, Completed, or Pending, with dynamic count indicators for each category.
- **Search Functionality**: Search tasks by title or description for quick access.
- **Priority Levels**: Assign High, Medium, or Low priority to tasks, with color-coded visuals (red, yellow, blue).
- **Due Dates**: Set and display due dates for tasks, shown in a user-friendly format.
- **Dark Mode**: Toggle between light and dark themes, with user preference saved in localStorage.
- **Responsive Design**: Optimized for mobile and desktop devices using Tailwind CSS.
- **Animations**: Smooth slide-in animations for task items and fade-in transitions for page loads.
- **Data Persistence**: Tasks and user preferences (username, dark mode) are persisted in localStorage with robust error handling.

## 🛠 Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/task-tracker.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd task-tracker
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open the Application**:
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🧰 Technologies Used

* **React.js** – UI library for building interactive interfaces with hooks and components.
* **Vite** – Fast modern build tool for React projects.
* **Tailwind CSS** – Utility-first CSS framework for responsive design and dark mode.
* **LocalStorage API** – For data persistence across sessions.
* **ES6+ JavaScript** – Modern syntax for better code readability and modularity.

## 🔗 Live Demo

Deployed at: [https://your-task-tracker.vercel.app](https://your-task-tracker.vercel.app)

> *(Update this link after deployment)*

## 🖼 Screenshots

> Add screenshots in a `/screenshots` folder and embed them like below:

* ![Login Screen](./screenshots/login.png)
* ![Dashboard](./screenshots/dashboard.png)

## 📁 Project Structure

```
task-tracker/
├── src/
│   ├── components/          ✅ Login, TaskForm, TaskItem, TaskList, TaskFilter
│   ├── utils/               ✅ localStorage.js
│   ├── App.css              ✅ Styling (can be Tailwind or custom)
│   ├── App.jsx              ✅ Main component
│   ├── index.css            ✅ Tailwind directives go here
│   └── main.jsx             ✅ ReactDOM root
├── .gitignore
├── index.html
├── vite.config.js           ✅ Required for Vite
├── package.json             ✅ Dependencies listed here
├── README.md                ✅ ✅ Completed and well-formatted
```

## 🧪 Development Notes

* **Component-Based Architecture** for clean and maintainable code.
* **State Management** is handled via React hooks (`useState`, `useEffect`).
* **Dark Mode**: Saves user preference in localStorage and applies via Tailwind dark classes.
* **Animations**: Transition effects and subtle entrance animations using Tailwind’s `transition` utilities.
* **Error Handling** for localStorage operations using `try-catch` to prevent crashes.
* **Edge Cases**:
  * Disallows blank task submissions.
  * Prevents duplicate task IDs using timestamp.
  * Graceful fallback for empty or corrupted localStorage data.

## 🔮 Future Improvements

* Implement task categories or tagging.
* Add drag-and-drop reordering of tasks.
* Enable multi-user support via cookies or local auth.
* Export/import task data as JSON or CSV.

## 📦 Submission Details

* **GitHub Repository**: [https://github.com/your-username/task-tracker](https://github.com/your-username/task-tracker)
* **Live Demo**: [https://your-task-tracker.vercel.app](https://your-task-tracker.vercel.app)
* **Email Contact**: [your-email@example.com](mailto:your-email@example.com)
* **Tested On**: Chrome, Firefox, Safari, Mobile View (iOS & Android)

## 🙋 Questions?

If you have any questions or feedback, feel free to reach out via GitHub issues or email at [your-email@example.com](mailto:your-email@example.com).

---

> Built with ❤️ for the xAI Intern Pre-Hire Assignment.
![image](https://github.com/user-attachments/assets/5e58c35b-a01c-497a-ac60-e7f7e52d285e)
> ![image](https://github.com/user-attachments/assets/7b1d86da-1302-47a4-bd09-7704fd9ee4c8)


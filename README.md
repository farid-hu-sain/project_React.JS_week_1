📝 React Todo Application

A simple and functional Todo List App built with React.js as part of the Take Home Test project.
This application demonstrates the implementation of fundamental React concepts such as state management, props, component-based architecture, list rendering, and conditional rendering.

🚀 Project Overview

This project is a Todo List web application where users can:

Add new tasks

Mark tasks as completed or active

Delete tasks

Filter tasks (All, Active, Completed)

It is designed to be responsive, clean, and follow React best practices using functional components and hooks (useState).

🧩 Features
Feature	Description
➕ Add Todo	Users can add new todo items through an input field and button or press Enter
✅ Toggle Completion	Check or uncheck todos to mark them as complete/incomplete
❌ Delete Todo	Remove individual todo items
🔍 Filter Todos	Filter list by All, Active, or Completed status
📱 Responsive	Works well on both desktop and mobile screens
⚙️ Technical Stack

Frontend: React (Vite)

Styling: CSS (App.css) and inline styles

Language: JavaScript (ES6+)

State Management: useState Hook

Rendering: JSX with conditional and list rendering

🏗️ Project Structure
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx       # Input form to add new todos
│   │   ├── TodoList.jsx       # Displays list of todos
│   │   ├── TodoItem.jsx       # Single todo item with toggle & delete
│   │   └── TodoFilter.jsx     # Buttons to filter todo view
│   ├── App.jsx                # Main component importing all others
│   ├── index.jsx              # Entry point
│   └── App.css                # Styling
├── package.json
└── README.md

🧠 React Concepts Implemented

Component-based architecture

State management with useState

Props for parent-to-child data flow

Conditional rendering for filter and status

List rendering with unique keys

Event handling for form submission and buttons

🪄 How to Run the Application
1️⃣ Clone the Repository
git@github.com:farid-hu-sain/project_React.JS_week_1.git
cd react-todo-app

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev

4️⃣ Open in Browser

Go to:

http://localhost:5173

💅 Styling

This project uses a combination of:

CSS classes (from App.css) for layout and responsiveness

Inline styles for conditional UI (e.g., line-through on completed todos)

Responsive design is achieved with flexible layout and relative sizing.


✅ Acceptance Criteria Checklist

Criteria	                          Status
Add Todo	                      ✅ Implemented
Display Todo List	              ✅ Implemented
Toggle Completion	              ✅ Implemented
Delete Todo	                    ✅ Implemented
Filter Todos	                  ✅ Implemented
Component-based Structure	      ✅ Yes
State Management with useState	✅ Yes
Props Usage	                    ✅ Yes
JSX & Conditional Rendering	    ✅ Yes
Responsive Styling	            ✅ Yes
No Console Errors	              ✅ Yes


Vercell = project-react-js-week-1-qt80nnum2-farid-hu-sains-projects.vercel.app


🧾 License

This project is created for educational purposes as part of a React Programmer Course Take Home Test.
You may modify and use it for learning or demonstration purposes.

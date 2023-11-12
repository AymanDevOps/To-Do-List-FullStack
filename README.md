# ✅ To-Do List Manager

**Goal:** Build a full-stack To-Do List application with user authentication. Users can add tasks, mark them as complete, and delete them. The app uses MongoDB for data storage, EJS for server-side rendering, and Node.js/Express.js for backend logic.

## Project Overview

The To-Do List Manager is a personalized task management tool allowing users to keep track of their daily objectives. After securely logging in, users can add new tasks, visually strike through completed tasks, and remove tasks from the list. 

![to do list](<public/img/to do.png>)

## Technology Stack 🛠️

**Used Technologies:** Node.js, Express.js, MongoDB, Mongoose, EJS, CSS, JavaScript

### Detailed Components:

- **EJS (Embedded JavaScript):** Dynamically renders HTML pages for individual user task lists, offering a tailored experience.
  
- **Node.js & Express.js:** Form the server-side foundation, handling:
  - User authentication and session management.
  - Task creation, update, and deletion requests.
  - Interactions with MongoDB to persistently store user data and tasks.
  
- **MongoDB with Mongoose:** Manages a scalable and efficient database to store users' tasks, preserving the state of task completion and user-specific data.
  
- **CSS & JavaScript:** Create a responsive and interactive user interface, ensuring a smooth and intuitive user experience.

## Key Features 🔑

1. **Task Management:** Users can add, complete, and delete tasks seamlessly.
2. **Interactive Task Completion:** Clicking a checkmark next to a task strikes it through, visually indicating completion.
3. **Task Deletion:** An 'X' button next to each task allows for its removal.
4. **User Authentication:** Secure login system to provide personalized task lists and secure user data.

## Challenges & Solutions 🌟

- Ensuring real-time responsiveness in task status updates and deletions was key, achieved through AJAX calls for seamless user experience.
- Implementing secure and efficient user authentication to protect personal task lists and enhance user trust.

## Lessons Learned 📚

- Mastered the integration of MongoDB with Node.js for robust data management in a dynamic web application.
- Learned the intricacies of creating and managing user sessions in Express.js.
- Enhanced front-end skills in creating intuitive and user-friendly interfaces with CSS and JavaScript.

# Task List Web Application

A simple web application to manage tasks.

## Introduction

This project is a to-do list web application designed to help users organize and manage their tasks efficiently. Provides a friendly interface for creating, updating and deleting tasks, as well as marking tasks as completed.

## Characteristics

- User Authentication: Allows users to register, log in and log out securely.
- Task Management: Users can create new tasks, update existing tasks, mark tasks as completed, and delete tasks.
- Responsive Design: The app is designed to run smoothly on devices of all sizes, including desktops, tablets, and smartphones.
- Data persistence: Tasks are stored in a database, ensuring that user data is preserved even after the user logs out or closes the browser.

## Used technology

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Session Management**: cookie-session
- **Password Encryption**: bcrypt.js

## Facility

1. Clone the repository:

```bash
git clone https://github.com/CristianOrellanna/toDo-list.git
```

2. Navigate to the project directory:

```bash
cd toDo-list
```

3. Install the dependencies:

```bash
npm install
```

4. Configure MySQL database:

- Create a MySQL database called `todo_list`.
- Import the database schema from `db/database.sql`.


5. Start the application:

```bash
npm start
```

6. Access the application in your web browser at

```bash
http://localhost:3000
```

## Use

1. Register for a new account or log in with an existing account.
2. Once logged in, you will be redirected to the home page where you can view, create, update and delete tasks.
3. To create a new task, click the “Add Task” button and fill in the task details.
4. To update or delete an existing task, click the respective buttons next to the task.
5. You can also mark tasks as completed by checking the box next to the task.

## Contribution

Contributions are welcome! If you encounter any problems or have suggestions for improvements, please open an issue or submit a pull request.

## Contact

For any questions or comments, please contact [Cristian Orellana](https://github.com/CristianOrellanna).


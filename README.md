# Expenses Monitor

## Description

**Expense Monitor** is an expense tracking application built using React. It allows users to add, edit, and delete expenses, categorized by type, date, and description. The application includes animated toast notifications and utilizes Firebase for user authentication and database management.

## Demo

The application is available at `https://expenses-monitor-54cee.web.app/`

**Demo account details:**
- Login: `example@example.pl`
- Password: `qwerty`

## Features

- **Expense Management**: Ability to add, edit, and delete expenses.
- **User Authentication**: User login and registration through Firebase Authentication.
- **State Management**: Use of React hooks like `useReducer` and `useContext` for managing the application state.
- **Animated Notifications**: Custom-built, animated toast notifications.

## Technologies

- **React** – Main front-end framework.
- **Firebase** – Used for user authentication and storing data in Firestore.
- **Tailwind CSS** – CSS framework used for styling components.

## Installation and Running the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/jakubchmielewsky/expenses_monitor.git
    ```

2. Navigate to the project directory

3. Install dependencies:
    ```bash
    npm install
    ```

4. Configure Firebase:
    - Create a new project in Firebase.
    - Add Firebase Authentication and Firestore with the `expenses` collection.
    - Copy the Firebase configuration and add it to the `firebaseConfig.js` file in the `src` directory.

5. Start the application:
    ```bash
    npm start
    ```
    The application will be available at:
    ```
    http://localhost:3000
    ```

## Usage

- **Add new expenses** by filling out the form.
- **Edit existing expenses** by clicking the edit icon next to the selected expense.
- **Delete expenses** using the trash icon.
- **Receive toast notifications** for each action of adding, editing, or deleting an expense.

## TODO

- Handle the situation of editing an expense that has been deleted.
- Fix graph scaling issues.
- Replace `<select>` and `<input type="date">` fields with components that can be styled for mobile devices.
- Implement data export functionality.

## License

This project is licensed under the MIT License.


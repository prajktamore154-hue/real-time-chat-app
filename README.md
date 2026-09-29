# Real-Time Chat Application

A real-time chat application built using React, Node.js, Express, Socket.IO, and SQLite.

The application allows multiple users to exchange messages instantly using Socket.IO. Messages are persisted in a SQLite database and remain available after refreshing the application.

---

## Features

### Core Features

- Real-time messaging using Socket.IO
- Send and receive messages instantly
- Messages persist after page refresh
- Message timestamps
- Username-based chat
- REST API for sending messages
- REST API for fetching chat history
- SQLite database for message persistence
- Connection and disconnection handling
- Dynamic online/offline connection status
- Online users panel
- Responsive user interface
- Error handling for API requests

### Bonus Features

- Typing indicator
- Online user list
- Real-time online user updates
- Connection status indicator

---

## Tech Stack

### Frontend

- React
- Vite
- Socket.IO Client
- CSS

### Backend

- Node.js
- Express.js
- Socket.IO
- SQLite
- CORS
- dotenv

---

## Project Structure

```text
real-time-chat-app/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── messageController.js
│   │   │
│   │   ├── models/
│   │   │   └── database.js
│   │   │
│   │   ├── routes/
│   │   │   └── messageRoutes.js
│   │   │
│   │   ├── socket/
│   │   │   └── socketHandler.js
│   │   │
│   │   └── server.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md

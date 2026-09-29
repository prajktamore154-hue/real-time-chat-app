# Real-Time Chat Application

A real-time chat application built using React, Node.js, Express, Socket.IO, and SQLite.

## Features

- Real-time messaging using Socket.IO
- Send and receive messages instantly
- Chat history persists after refreshing
- Message timestamps
- REST APIs for sending and fetching messages
- SQLite database for message storage
- Responsive and user-friendly interface
- Handles Socket.IO connections and disconnections

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

## Project Structure

```text
chatapp/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── messageController.js
│   │   ├── models/
│   │   │   └── database.js
│   │   ├── routes/
│   │   │   └── messageRoutes.js
│   │   ├── socket/
│   │   │   └── socketHandler.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
├── .gitignore
└── README.md
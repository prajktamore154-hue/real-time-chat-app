import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Failed to fetch messages:", err));

    socket.on("newMessage", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!username.trim() || !message.trim()) return;

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          message,
        }),
      });

      const savedMessage = await response.json();

      socket.emit("sendMessage", savedMessage);

      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="app">
      <div className="chat-container">
        <header className="chat-header">
          <div>
            <h1>💬 Real-Time Chat</h1>
            <p>Connected to Socket.IO</p>
          </div>
          <span className="online">● Online</span>
        </header>

        <div className="username-section">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="messages">
          {messages.length === 0 ? (
            <div className="empty">
              <h2>No messages yet</h2>
              <p>Start the conversation!</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div className="message" key={msg.id}>
                <div className="message-top">
                  <strong>{msg.username}</strong>
                  <span>
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <p>{msg.message}</p>
              </div>
            ))
          )}
        </div>

        <form className="message-form" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send ➤</button>
        </form>
      </div>
    </div>
  );
}

export default App;
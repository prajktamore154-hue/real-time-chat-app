const db = require("../models/database");

const getMessages = (req, res) => {
  db.all(
    "SELECT * FROM messages ORDER BY timestamp ASC",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch messages" });
      }

      res.json(rows);
    }
  );
};

const sendMessage = (req, res) => {
  const { username, message } = req.body;

  if (!username || !message) {
    return res.status(400).json({
      error: "Username and message are required",
    });
  }

  db.run(
    "INSERT INTO messages (username, message) VALUES (?, ?)",
    [username, message],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: "Failed to save message",
        });
      }

      db.get(
        "SELECT * FROM messages WHERE id = ?",
        [this.lastID],
        (err, row) => {
          if (err) {
            return res.status(500).json({
              error: "Failed to retrieve message",
            });
          }

          res.status(201).json(row);
        }
      );
    }
  );
};

module.exports = {
  getMessages,
  sendMessage,
};
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./chat.db", (err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("SQLite database connected");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    message TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

module.exports = db;
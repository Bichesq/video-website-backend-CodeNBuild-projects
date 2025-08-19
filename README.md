# YouTube Clone Backend (Practice Project)

A lightweight backend for a YouTube clone built with Node.js + Express.
Instead of a real database, this project uses a simple db.json file to store data.
The goal is to practice building and consuming basic CRUD APIs.

📌 Features

Users: Create, read, update, delete users.

Videos: Add, view, update, delete video metadata.

Comments: Add, view, update, delete comments on videos.

Likes/Dislikes: Simple counters stored in JSON.

🛠️ Tech Stack

Node.js

Express.js

File System (fs) to read/write JSON file

📂 Project Structure
youtube-backend/
├── db.json          # JSON "database"
├── routes/
│   ├── users.js
│   ├── videos.js
│   └── comments.js
├── server.js        # Entry point
└── package.json

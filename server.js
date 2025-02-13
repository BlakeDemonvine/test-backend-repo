const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// 啟用 CORS，讓前端可以存取 API
app.use(cors());

// 建立一個簡單的 API
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from Node.js backend!" });
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

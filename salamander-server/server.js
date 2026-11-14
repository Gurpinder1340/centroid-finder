const express = require("express");
const fs = require("fs");
const path = require("path");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Salamander Video Server is running!");
});

app.get("/api/videos", (req, res) => {
    const videosFolder = path.join(__dirname, "videos");

    fs.readdir(videosFolder, (error, files) => {
        if (error) {
            return res.status(500).json({ error: "Could not read videos folder" });
        }

        res.json({ videos: files });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
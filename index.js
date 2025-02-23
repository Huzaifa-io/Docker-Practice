import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello, World!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


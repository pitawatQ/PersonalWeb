const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

// เพิ่มหนังสือ
router.post('/add', async (req, res) => {
    const { title, author, description, fileUrl } = req.body;
    try {
        const book = await Book.create({ title, author, description, fileUrl });
        res.json({ message: 'Book added', book });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ดึงข้อมูลหนังสือทั้งหมด
router.get('/', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

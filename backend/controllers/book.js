const Book = require('../models/book'); 
const mongoose = require('mongoose');

exports.createBook = async (req, res) => {
    try {
        const { title, author, publishedDate, genre, price } = req.body;
        
        if (!title || !author || !price) {
            return res.status(400).json({ message: "Titre, auteur et prix sont obligatoires." });
        }

        const book = new Book({ title, author, publishedDate, genre, price });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID invalide." });
        }

        const book = await Book.findById(id);
        if (!book) return res.status(404).json({ message: "Livre non trouvé." });

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID invalide." });
        }

        const book = await Book.findByIdAndUpdate(id, req.body, { new: true });

        if (!book) {
            return res.status(404).json({ message: "Livre non trouvé." });
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID invalide." });
        }

        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).json({ message: "Livre non trouvé." });
        }

        res.status(200).json({ message: "Livre supprimé avec succès." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

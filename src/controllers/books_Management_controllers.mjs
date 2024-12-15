import Book from "../models/books.mjs"; // Adjust the path as necessary

// Add a New Book
export const addBook = async (req, res) => {
  try {
    const { title, author, genre, isbn } = req.body;

    const newBook = await Book.create({ title, author, genre, isbn });

    res.status(201).json({ message: "Book added successfully", data: newBook });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Book Details
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedBook = await Book.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res
      .status(200)
      .json({ message: "Book updated successfully", data: updatedBook });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Book
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res
      .status(200)
      .json({ message: "Book deleted successfully", data: deletedBook });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Filter Books
export const filterBooks = async (req, res) => {
  try {
    const { title, author, genre, isbn } = req.query;

    const filter = {};
    if (title) filter.title = title;
    if (author) filter.author = author;
    if (genre) filter.genre = genre;
    if (isbn) filter.isbn = isbn;

    const books = await Book.find(filter);

    res
      .status(200)
      .json({ message: "Books fetched successfully", data: books });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

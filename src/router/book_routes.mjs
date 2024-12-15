import express from "express";
import {
  addBook,
  updateBook,
  deleteBook,
  filterBooks,
} from "../controllers/books_Management_controllers.mjs";

const router = express.Router();

// Define routes
router.post("/addbooks", addBook); // Add a new book
router.put("/updatebook/:id", updateBook); // Update a book by ID
router.delete("/deletebook/:id", deleteBook); // Delete a book by ID
router.get("/books", filterBooks); // Filter books

export default router;

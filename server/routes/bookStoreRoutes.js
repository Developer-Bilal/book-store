import { Router } from "express";
import {
  getBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
} from "../controllers/bookStoreControllers.js";

const router = Router();

router.get("/", getBooks);

router.post("/create", createBook);

router.get("/:id", getBookById);

router.put("/update/:id", updateBookById);

router.delete("/delete/:id", deleteBookById);

export default router;

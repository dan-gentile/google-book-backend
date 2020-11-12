import express, { Request, Response } from "express";
import Book from "../models/books";
import { config } from "dotenv";
import axios from "axios";

const router = express.Router();
config();

router.get("/api/google/:id", async (req: Request, res: Response) => {
  await axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${req.params.id}&key=${process.env.API_KEY}`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/api/books", (req: Request, res: Response) => {
  Book.find()
    .then((bookData) => {
      res.status(200).json(bookData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/api/books", (req: Request, res: Response) => {
  Book.create(req.body)
    .then((newBookData) => {
      res.status(200).json(newBookData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/api/books/:id", (req: Request, res: Response) => {
  Book.findByIdAndRemove({ _id: req.params.id })
    .then((deletedBookData) => {
      res.status(200).json(deletedBookData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

export default router;

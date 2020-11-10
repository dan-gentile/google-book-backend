import express, { Request, Response } from "express";
import Book from "../models/books";

const router = express.Router();

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

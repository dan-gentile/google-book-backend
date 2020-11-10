"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = __importDefault(require("../models/books"));
const router = express_1.default.Router();
router.get("/api/books", (req, res) => {
    books_1.default.find()
        .then((bookData) => {
        res.status(200).json(bookData);
    })
        .catch((err) => {
        res.status(500).json(err);
    });
});
router.post("/api/books", (req, res) => {
    books_1.default.create(req.body)
        .then((newBookData) => {
        res.status(200).json(newBookData);
    })
        .catch((err) => {
        res.status(500).json(err);
    });
});
router.delete("/api/books/:id", (req, res) => {
    books_1.default.findByIdAndRemove({ _id: req.params.id })
        .then((deletedBookData) => {
        res.status(200).json(deletedBookData);
    })
        .catch((err) => {
        res.status(500).json(err);
    });
});
exports.default = router;
//# sourceMappingURL=bookRoutes.js.map
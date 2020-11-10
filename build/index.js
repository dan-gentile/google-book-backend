"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const compression_1 = __importDefault(require("compression"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const app = express_1.default();
const PORT = process.env.PORT || 8080;
app.use(compression_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(bookRoutes_1.default);
mongoose_1.default.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
//# sourceMappingURL=index.js.map
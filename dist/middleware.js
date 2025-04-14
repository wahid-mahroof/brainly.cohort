"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_PASSWORD = "123123";
const userMiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    const decoded = jsonwebtoken_1.default.verify(header, JWT_PASSWORD);
    if (decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "You are not logged in",
        });
    }
};
exports.userMiddleware = userMiddleware;

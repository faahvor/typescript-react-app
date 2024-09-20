"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Greeting_1 = __importDefault(require("./Greeting"));
const Counter_1 = __importDefault(require("./Counter"));
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(Greeting_1.default, { name: "John" }),
    react_1.default.createElement(Counter_1.default, null)), document.getElementById("root"));

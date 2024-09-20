"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// Step 2: Convert the Greeting component to TypeScript
const Greeting = ({ name }) => {
    return react_1.default.createElement("div", null,
        "Hello, ",
        name,
        "!"); // Render a greeting message
};
// Step 3: Export the component
exports.default = Greeting;

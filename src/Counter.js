"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
// Step 2: Convert the Counter component to TypeScript
const Counter = () => {
    // Step 3: Use the useState hook to manage the count state
    const [count, setCount] = (0, react_1.useState)({ count: 0 });
    // Step 4: Define the increment function
    const increment = () => {
        setCount({ count: count.count + 1 }); // Increment the count state
    };
    // Step 5: Render the component
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null,
            "Count: ",
            count.count),
        " ",
        react_1.default.createElement("button", { onClick: increment }, "Increment"),
        " "));
};
// Step 6: Export the component
exports.default = Counter;

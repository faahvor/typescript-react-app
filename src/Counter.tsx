import React, { useState } from 'react';

// Step 1: Define the type for the state
interface CounterState {
    count: number; // The count state must be a number
}

// Step 2: Convert the Counter component to TypeScript
const Counter: React.FC = () => {
    // Step 3: Use the useState hook to manage the count state
    const [count, setCount] = useState<CounterState>({ count: 0 });

    // Step 4: Define the increment function
    const increment = () => {
        setCount({ count: count.count + 1 }); // Increment the count state
    };

    // Step 5: Render the component
    return (
        <div>
            <p>Count: {count.count}</p> {/* Display the current count */}
            <button onClick={increment}>Increment</button> {/* Button to increment the count */}
        </div>
    );
};

// Step 6: Export the component
export default Counter;

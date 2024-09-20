import React from 'react';

// Step 1: Define the props type for the Greeting component
interface GreetingProps {
    name: string; // The name prop must be a string
}

// Step 2: Convert the Greeting component to TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>; // Render a greeting message
};

// Step 3: Export the component
export default Greeting;

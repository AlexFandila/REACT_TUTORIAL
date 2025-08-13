import { useState } from "react";


const WelcomeMessage: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
    <div>
      <div className="welcome-message">
        <h1>Welcome to My React App</h1>
        <p>This is a basic React application.</p>
      </div>
      <div>
        <p>Current Count: {count}</p>
        {/* This button increments the count by 1 */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        {/* This button decrements the count by 1 */}
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        {/* This button resets the count to 0 */}
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
    );
}

export default WelcomeMessage;
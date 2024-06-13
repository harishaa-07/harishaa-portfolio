import './App.css';
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>My First React app</h1>
      <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
      </button>
     </div>
  );
}

export default App;

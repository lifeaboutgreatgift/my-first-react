import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(100)

  const color = count < 0 ? 'red' : 'white'

  return (
    <div className="app">
      <h1>My Counter</h1>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default App
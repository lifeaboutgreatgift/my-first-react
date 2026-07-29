import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step] = useState(1)

  const color = count < 0 ? 'red' : 'white'

  return (
    <div className="app">
      <h1>My Counter</h1>
      <p className="count" style={{ color: color }}>{count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count - step)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => count < 10 && setCount(count + step)}>+</button>
      </div>
    </div>
  )
}

export default App
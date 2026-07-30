import { useState } from 'react'
import './App.css'
import subbtn from './assets/sub-btn.png'
import restbtn from './assets/rest-btn.png'
import addbtn from './assets/add-btn.png'

function App() {
  const [count, setCount] = useState(0)
  const [step] = useState(1)

  const color = count < 0 ? 'red' : 'white'

  return (
    <div className="app">
      <h1>Counter</h1>
      <p className="count" style={{ color: color }}>{count}</p>
      <div className="buttons">

        
        <button
         onClick={() => setCount(count - step)}
         className="ink-nav-button"
         style={{ backgroundImage: `url(${subbtn})`}}
         >
         </button>
        <button
         onClick={() => setCount(0)}
         className="ink-nav-button"
         style={{ backgroundImage: `url(${restbtn})`}}
         >
         </button>
        <button 
        onClick={() => count < 10 && setCount(count + step)}
        className="ink-nav-button"
        style={{ backgroundImage: `url(${addbtn})`}}
        >
        </button>
      </div>
    </div>
  )
}

export default App
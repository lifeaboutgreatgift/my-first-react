import { useState } from 'react'
import './App.css'
import subbtn from './assets/sub-btn.png'
import restbtn from './assets/rest-btn.png'
import addbtn from './assets/add-btn.png'

function CounterButton({ image, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="ink-nav-button"
      style={{ backgroundImage: `url(${image})`}}
      ></button>
  );
}
function App() {
  const [count, setCount] = useState(0)
  const [step] = useState(1)

  const color = count < 0 ? 'red' : 'white'

  return (
    <div className="app">
      <h1>Counter</h1>
      <p className="count" style={{ color: color }}>{count}</p>
      <div className="buttons">

       <CounterButton 
         image={subbtn}
         onClick={() => setCount(count-step)} 
        />

        <CounterButton 
         image={restbtn}
         onClick={() => setCount(0)} 
        />
        
        <CounterButton 
         image={addbtn}
         onClick={() => count < 100 && setCount(count+step)} 
        />
        
      </div>
    </div>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0); 

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter <= 0) {
      console.log("Counter cannot be less than 0.");
    }
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <p>Count: {counter}</p>
      <button className="add-btn" onClick={addValue}>Add Value</button>
      <button className="remove-btn" onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

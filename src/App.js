import React, { useState } from 'react'
import './App.css'
import KeyPad from './Components/KeyPad'
import Result from './Components/Result'

function App() {
  const [result, setResult] = useState('')
  const [on, setOn] = useState(false)
  const buttonPressed = (pressedValue) => {
    if (pressedValue === '=') {
      setResult(eval(result))
    } else if (pressedValue === 'C') {
      setResult('')
    } else if (pressedValue === 'ON/OFF') {
      if (on === true) {
        setResult('0')
        setOn(!on)
      } else {
        setResult('')
        setOn(!on)
      }
    } else setResult(result + pressedValue)
  }

  return (
    <div className="App">
      <Result result={result} />
      <KeyPad buttonPressed={buttonPressed} />
    </div>
  )
}

export default App

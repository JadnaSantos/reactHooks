import { useEffect, useState, useRef } from 'react'

function App() {
  const [name, setName] = useState()

  const inputRef = useRef()

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input 
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <h1>Hello! My name is {name}</h1>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default App

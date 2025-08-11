import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='mb-15 text-cyan-300 text-4xl'>Counter app</h1>
      <div className='flex flex-col items-center gap-6'>
        <div className='flex gap-2'>
          <button onClick={() => {setCount(count => count - 1)}}>-</button>
          <button>{count}</button>
          <button onClick={() => {setCount(count => count + 1)}}>+</button>
        </div>

        <button onClick={() => {setCount(0)}}>Reset</button>
      </div>
    </>
  )
}

export default App

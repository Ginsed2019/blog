import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Introduction</h1>
      <p>Hello, my name is Gintautas.</p>
      <p>The goal of this page is to have a simple web log, diary or something else to help me learn to code better, and write some ideas.</p>
      <p>This page will evolve a lot over time, will try to do at least one commit per weak.</p>
      <button onClick={() => setCount((count) => count + 1)}> count is {count} </button>
    </>
  )
}

export default App

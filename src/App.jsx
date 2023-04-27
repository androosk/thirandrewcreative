import { useState } from 'react'
import './App.css'
import thirdAndrew from './assets/ThirdAndrewCreative_1.2.1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://thirdandrewcreative.com" target="_blank">
          <img src={thirdAndrew} className="logo" alt="Third Andrew Logo" />
        </a>
      </div>
      <h1>Third Andrew Creative Agency</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

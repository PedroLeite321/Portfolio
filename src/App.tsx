import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='introduction__page'>
        <div className="loading__screen__5s">
          <picture className="glowing__profile">
            <img src="./" alt="" />
          </picture>
        </div>
      </div>
    </>
  )
}

export default App

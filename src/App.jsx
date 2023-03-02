import { useState } from 'react'
import Formulario from "./formulario.jsx"
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      
      <Formulario/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouselslide from './Carouselslide';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Carouselslide />
        </div>
    </>
  )
}

export default App

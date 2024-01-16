import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Routes>
      <Route path='/Lessons-Portfolio' element={<Home/>}/>
    </Routes>
  )
}

export default App

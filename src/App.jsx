import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Body from './component/Body'
import Card from './component/Card'
function App() {
  return (
    <>
       
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path="/card/:id" element={<Card/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App


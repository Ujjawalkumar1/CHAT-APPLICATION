import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Login from './components/Login';
import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },

])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.avif')" }}
    >
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

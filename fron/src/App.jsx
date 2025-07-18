import Signup from './components/Signup';
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
      <h1 className="text-3xl font-bold bg-gray-400 p-4 rounded-lg shadow-lg text-white">
        Let's build chat app
      </h1>
    </div>
  )
}

export default App

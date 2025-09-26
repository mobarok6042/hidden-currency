import skyImage from './assets/sky.jpg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {


  return (
    <div
      className="relative h-screen w-full bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${skyImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-green-950 font-semibold font-sans">
          This domain is for sale.
        </h1>
        <h3 className="text-lg sm:text-2xl md:text-4xl text-red-600 font-extrabold font-sans">
          Serious inquiries only.
        </h3>
        <Link to ="/contact">
          <button className="btn btn-outline btn-secondary font-bold text-gray-700 border-b-8 border-6 border-green-800 text-2xl w-40 h-14 hover:bg-primary hover:text-white">
            Contact us
          </button>
        </Link>
      </div>
    </div>

  )
}

export default App

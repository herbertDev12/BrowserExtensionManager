import './App.css'
import HeaderBar from './Components/HeaderBar'
import FiterBar from './Components/FilterBar'

export default function App() {
  return (
    <div> 
      <HeaderBar />
      <div className="fixed z-50 
        top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        text-center text-gray-800 text-2xl font-bold ">
        Extensions List
      </div>
      
      <FiterBar/>    
    </div>

  )
}


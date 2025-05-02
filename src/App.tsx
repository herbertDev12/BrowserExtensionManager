import './App.css'
import HeaderBar from './Components/HeaderBar'
import CustomButton from './Components/ui/CustomButton'

export default function App() {
  return (
    <body className="min-h-screen bg-blue-50"> 
      <HeaderBar />
      <div className="fixed z-50 
        top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        text-center text-gray-800 text-2xl font-bold">
        Extensions List
      </div>
      <div className="flex justify-center items-center h-screen w-full">
        <CustomButton />
      </div>
    </body>

  )
}


import './App.css'
import HeaderBar from './Components/HeaderBar'
import FiterBar from './Components/FilterBar'
import ExtensionGrid from './Components/ExtensionGrid'

export default function App() {
  return (
    <div> 
      <HeaderBar />
      <div className=" text-gray-800 text-3xl font-bold fixed z-50 top-[18%] left-[50%] transform flex -translate-x-1/2 -translate-y-1 gap-2
                 md:top-[20%] md:left-[15%] md:-translate-x-1/3 md:-translate-y-1/5
                 lg:top-[20%] lg:left-[15%] lg:-translate-x-1/2 lg:-translate-y-1/5
                 xl:left-[15%] 2xl:left-[12%]">
        Extensions List
      </div>
      <FiterBar/>   
      <ExtensionGrid/>
    </div>

  )
}


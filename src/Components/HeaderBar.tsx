import DarkThemeButton from "./DarkThemeButton"

export default function HeaderBar() {
  return (
    <header className="
      fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50
      rounded-xl
      mx-4 my-4                 
      sm:mx-6 sm:my-5           
      md:mx-8 md:my-6           
      lg:mx-10 lg:my-8          
      xl:mx-12 xl:my-10">
        
      <div className="fixed w-full bg-white text-white dark:bg-gray-800 shadow-lg flex justify-center
              top-4 left-4 right-4  
              m:top-6 sm:left-6 sm:right-6  
              md:top-8 md:left-8 md:right-8  
              lg:top-10 lg:left-10 lg:right-10">

        <div className="w-full h-15 flex max-w-screen-2xl px-4 items-center gap-90">  
          <img 
            src="/src/assets/images/logo.svg"
            alt="Extensions"
            className="h-auto max-h-12 object-left  
                sm:max-h-14  
                md:max-h-16
                lg:max-h-20"
          />       
        </div>

        <div className="w-full h-15 flex max-w-screen-2xl px-4 items-center gap-90">
          <DarkThemeButton/>
        </div>
      
      </div>

    </header>
    
  )
}


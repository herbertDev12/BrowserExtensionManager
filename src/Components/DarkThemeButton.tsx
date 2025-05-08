import { useDarkMode } from '../context/DarkThemeContext';

export default function DarkThemeButton(){

    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button 
            onClick={toggleDarkMode}
            className="h-auto max-h-12 !bg-gray-300
                        justify-center 
                        p-2 sm:p-3 md:p-4"
        >
            {isDarkMode ? (
                <img
                    src='/src/assets/images/icon-moon.svg'
                    alt="Theme button"
                ></img>
            ): (
                <img
                    src='/src/assets/images/icon-sun.svg'
                    alt="Theme button"
                ></img>
            )}
            
        </button>
    )
}

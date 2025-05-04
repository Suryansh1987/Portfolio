import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"  // ✅ Add this line to fix undefined icons
import {cn} from '@/lib/utils';
export const Themetoggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        }
        else {
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)

        }
    })

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        }
        else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        }
    }

    return <button onClick={toggleTheme} className={cn("mt-6 pl-4 fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transiion-colors duration-300","focus:outline")}>
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-yellow-900" />}
    </button>
}

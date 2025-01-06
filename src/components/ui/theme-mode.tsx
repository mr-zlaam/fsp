
import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    return setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <>
      <span className="h-[38px] w-[38px] transition-background duration-300 hover:dark:bg-foreground/20 hover:bg-foreground/10 cursor-pointer flex justify-center items-center rounded-full" onClick={toggleTheme}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
      </span>
    </>
  )
}

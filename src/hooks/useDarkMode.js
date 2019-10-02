import { useEffect } from "react";
import {useLocalStorage} from "./useLocalStorage"

export const useDarkMode = () => {
  // Using localStorage so we can save whether the user wanted dark mode or no
  const [value, setValue] = useLocalStorage("darkmode", "");
  
  // useEffect! Anytime dark mode is updated, we look at it and update the body's class
  useEffect(() => {
      const mode = document.querySelector("body");
      if (value) {
        mode.classList.add("dark-mode")
      } else {
        mode.classList.remove("dark-mode")
      }
  }, [value])


  return [value, setValue];
}
import { useState,useEffect } from "react"

// Update window with on window resize events.
const useDeviceSize = () => {
    const [width, setWidth] = useState(0)
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    }
  
    useEffect(() => {
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  
    return [width]
  
  }
  
  export default useDeviceSize 
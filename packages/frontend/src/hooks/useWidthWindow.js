import { useEffect, useState } from "react";

function useInnerWidth () {

    const [isSmallScreen, setIsSmallScreen] = useState(0)

    useEffect(() => {
        let timeoutId
    
        function handleResize () {
          clearTimeout(timeoutId)
          timeoutId = setTimeout(() => {
            setIsSmallScreen(window.innerWidth)
          }, 250)
        }
    
        window.addEventListener('resize', handleResize)
        handleResize()
    
        return () => {
          window.removeEventListener('resize', handleResize)
          clearTimeout(timeoutId)
        }
      }, [])
  
    return isSmallScreen
}

export default useInnerWidth
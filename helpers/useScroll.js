import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Handler to call on window scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    // Remove event listener on cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return scrollY;
};

export default useScrollPosition;

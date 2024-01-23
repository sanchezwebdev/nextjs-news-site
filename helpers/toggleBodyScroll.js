//  Function  used to disable scrolling 
const toggleBodyScroll = (isChecked) => {
    const setBodyScroll = (hidden, paddingRight) => {
      document.body.style.overflow = hidden ? 'hidden' : '';
      document.body.style.paddingRight = paddingRight ? `${paddingRight}px` : '';
    };
  
    if (typeof window !== 'undefined') {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      setBodyScroll(isChecked, isChecked && scrollbarWidth);
    }
  };
  
  export default toggleBodyScroll;
  
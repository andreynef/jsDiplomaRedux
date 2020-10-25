import { useState, useRef, useEffect } from "react";

function useVisible(initialIsVisible) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}

export default useVisible;

// In the above code, we have added the event listener of the click event and remove it on component unmount.
//
//   Also we are handling the initial state of the component for visibility and reference of the component to detect outside click.
//
//   At last we are returning the reference, visibility state and method to change the visibility state and those attributes are useful to detect outside click.
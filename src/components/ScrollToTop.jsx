import React, {useState,useEffect} from 'react'
import { BsChevronUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 100 ? setVisible(true) : setVisible(false);};
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`scroll-top ${visible ? "visible" : ""}`}>
      <a href="#">
        <BsChevronUp />
      </a>
      
    </div>
  )
}

export default ScrollToTop

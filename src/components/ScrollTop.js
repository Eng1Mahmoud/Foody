import React, { useState, useRef } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa'
function ScrollTop() {
    let [hidden, setHidde] = useState(false)
    let top = useRef(null)
window.onScroll = ()=>{
    window.scrollY >=200 && setHidde(true)
}
    function scroll() {
        window.scrollTo(0, 0)
    }
    return (
        <div className={`ScrollTop`} ref={top} >
        {hidden&&( <FaArrowCircleUp className="icone rounded-circle" onClick={() => { scroll() }} />)}  
        </div>
    );
}

export default ScrollTop;

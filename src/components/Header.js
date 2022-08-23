import React, { useState } from 'react';
import Main from './Main';
import Navbars from './Navbar';

function Header() {

    let [FixClass, setFixClass] = useState("")
    window.onscroll = () => {
       
        if (window.scrollY >= 100) {

            setFixClass("fixed")
        }
        else { setFixClass("head") }
    }

    return (
        <header className={FixClass} >
            <Main />
            <Navbars />
        </header>
    );
}

export default Header

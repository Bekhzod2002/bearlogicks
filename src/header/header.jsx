import React, {useState} from "react";
import logo from '../Assets/images/logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai'
import './header.scss';

const Header = () => {
    const [isShown, setIsShown] = useState(true);
    const handleClick = (event) => {
        setIsShown((current) => !current);
      };
    return(  
        <>
            <div className="header">
                <div>
                    <img className="logo" src={logo} alt="" />
                </div>
                <div className="menu" style={{top: isShown? '-400px' : '0'}} >
                    <a>#ОбнимаяСJoonies</a>
                    <a>сенсорное развитие</a>
                    <a>возраст вашего ребенка</a>
                    <a>Исследование</a>
                    <a>О бренде Joonies</a>
                </div>
                <div onClick={handleClick} className="menubar">
                    <GiHamburgerMenu style={{display: isShown? 'block' : 'none'}} />
                    <AiOutlineClose style={{display: isShown? 'none' : 'block'}} />
                </div>
            </div>
        </>
    )
    
}

export default Header;
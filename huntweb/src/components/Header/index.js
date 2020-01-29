import React from 'react';
import './header.css';

const Header = () =>
    <header className="head">
        <h1>Title</h1>
        <ul>
            <li>Product</li>
            <li>About</li>
            <li>Settings</li>
        </ul>
    </header>
//Mesma coisa que o de cima
/* class Header extends Components{
    render(){
        return <h1>Hello</h1>
    }
} */

export default Header;


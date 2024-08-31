import { LOGO_URL } from "../utils/constans";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () =>{
    console.log('whole component re-renders')
    const [button_react, setbutton_react] = useState("Login")
    return (
    <div className="header">
        <div className="logo-container">
            <img 
            className="logo" src={LOGO_URL}/>
        </div>
        <div className="naive-items">
            <ul>
                <li>
                    <Link to="">Home</Link></li>
                <li>
                    <Link to="/about">About Us</Link></li>
                <li>
                    <Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <button className="login-button" 
                onClick={()=>{
                    button_react === "Login"? setbutton_react("Logout") : setbutton_react("Login");
                }}>{button_react}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;
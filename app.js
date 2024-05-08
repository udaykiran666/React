import React from "react";
import ReactDOM  from "react-dom/client";
//Header
//Body
//Footer


const Header = () =>{
    return (
    <div className="header">
        <div className="logo-container">
            <img 
            className="logo" 
            src="https://cdn.dribbble.com/userupload/6440848/file/original-7cc6fd8be265505f2e7b408fb754afa3.png?resize=640x480&vertical=center"></img>
        </div>
        <div className="naive-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}
const AppLayout = () =>{
    return (
    <div className="app">
        <Header/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);
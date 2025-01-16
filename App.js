import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return(
        <div className="header">
           <div className="logo">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3q8vyYK6Oo5FCSKCUraI09Ug0iqfLTg5hrQ&s" alt="logo-img"/>
           </div>
           <div className="nav-items">
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
const Footer2 = () => {
    return(
        <div>
            
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);





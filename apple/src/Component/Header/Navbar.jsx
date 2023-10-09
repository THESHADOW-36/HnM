import React from "react";
import "./Navbar.css"

const Navbar = () => {

   return (
         <div className="navbar">
            <div className="navbar-content">
               <div className="apple-logo">
                  <i class="fa-brands fa-apple fa-lg"></i>
               </div>

               <div className="navbar-text">
                  <p>Store</p>
                  <p>Mac</p>
                  <p>iPad</p>
                  <p>iPhone</p>
                  <p>Watch</p>
                  <p>AirPods</p>
                  <p>TV & Home</p>
                  <p>Entertainment</p>
                  <p>Accessories</p>
                  <p>Support</p>
               </div>

               <div className="navbar-search-bag">
                  <div className="navbar-search-logo"><i class="fa-solid fa-magnifying-glass"></i></div>
                  <div className="navbar-bag-logo"><i class="fa-solid fa-bag-shopping"></i></div>
               </div>
            </div>
         </div>
   )
}

export default Navbar
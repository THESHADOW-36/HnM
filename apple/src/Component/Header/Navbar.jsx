import React from "react";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
   const router = useNavigate()

   function storeSite() {
      router("/store")
   }

   function signInSite(){
       router("/sign-in")
   }

   function homepageSite(){
       router("/")
   }

   return (
      <>
         <div className="navbar">
            <div className="navbar-content">
               <div className="apple-logo" onClick={homepageSite}>
                  <i class="fa-brands fa-apple fa-lg"></i>
               </div>

               <div className="navbar-text">
                  <p onClick={storeSite}>Store</p>
                  <p>Mac</p>
                  <p>iPad</p>
                  <p>iPhone</p>
                  <p>Watch</p>
                  <p>Vision</p>
                  <p>AirPods</p>
                  <p>TV & Home</p>
                  <p>Entertainment</p>
                  <p>Accessories</p>
                  <p>Support</p>
               </div>

               <div className="navbar-search-bag">
                  <div className="navbar-search-logo"><i class="fa-solid fa-magnifying-glass"></i></div>
                  <div className="navbar-bag-logo"><i class="fa-solid fa-bag-shopping"></i>
                     <div className="navbar-bag">
                        <p>Orders</p>
                        <p>Your Saves</p>
                        <p>Account</p>
                        <p onClick={signInSite}>Sign In</p>
                     </div>   
                  </div>
               </div>
            </div>
         </div>
         <div className="navbar-space"></div>
      </>
   )
}

export default Navbar
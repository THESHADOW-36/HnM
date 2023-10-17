import React from "react";
import "./SignIn.css"
import Navbar2 from "../Header/Navbar2";
import Footer3 from "../Footer/Footer3";

const SignIn = () => {
   return (
      <>
         <Navbar2 />

         <div className="sign-in">
            <p className="check-out">Sign in for faster checkout.</p>

            <div className="sign-in-content">
               <p>Sign in to Apple Store</p>

               <div className="sign-in-box">
                  <div className="email-phone"><input type="text" placeholder="Email or Phone Number" /></div>

                  <div className="password"><input type="password" placeholder="Password" /></div>
                  <div className="remember-forgot">
                     <div className="d">
                        <input type="checkbox" />
                        <p>Remember me</p>
                     </div>

                     <div className="forgot-password">
                        <p>Forgot password?</p>
                     </div>
                  </div>

                  <button className="sign-in-button">Sign In</button>
               </div>
            </div>
         </div>

         <Footer3 />
      </>
   )
}

export default SignIn;
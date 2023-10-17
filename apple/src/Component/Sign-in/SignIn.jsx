import React from "react";
import "./SignIn.css"
import Navbar2 from "../Header/Navbar2";
import Footer3 from "../Footer/Footer3";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
   const router= useNavigate()

   function SignUpSite(){
      router("/sign-up")
   }

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
                     <div className="remember-me">
                        <input type="checkbox" />
                        <p>Remember me</p>
                     </div>

                     <div className="forgot-password">
                        <p>Forgot password?</p>
                     </div>
                  </div>

                  <button className="sign-in-button">Sign In</button>

                  <p className="sign-up-link">Don’t have an Apple ID? <span onClick={SignUpSite}>Create yours now.</span></p>
               </div>
            </div>

            <div className="si-line"></div>
            <p className="need-some-help">Need some help? <span>Chat now</span> or call 1‑800‑MY‑APPLE.</p>
         </div>

         <Footer3 />
      </>
   )
}

export default SignIn;
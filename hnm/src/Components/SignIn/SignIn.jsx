import React from "react";
import "./SignIn.css"

const SignIn = ({ display, setDisplay,bamDisplay,setBamDisplay }) => {

   function closeButton() {
      setDisplay(display => !display)
   }
   function becomeAMember() {
      setBamDisplay(bamDisplay => bamDisplay = true)
   }

   return (
      <>
         <div>
            {display
               ?
               <div className="sign-in-bg">
                  <div className="sign-in-lay">
                     <div className="sign-in">
                        <div className="sign-in-top">
                           <p>Sign in</p>
                           <div className="close-mark" onClick={closeButton}><i class="fa-solid fa-xmark"></i></div>
                        </div>
                        <p className="voucher">Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>

                        <form className="sign-in-form">
                           <label>Email <span className="star">*</span></label>
                           <br />
                           <div className="sign-in-input"><input type="text" /></div>
                           <div className="sign-in-password">
                              <label>Password <span className="star">*</span></label>
                              <br />
                              <div className="sign-in-input"><input type="password" /></div>
                           </div>
                        </form>

                        <div className="remem-forgot">
                           <div className="remember-me">
                              <input type="checkbox" />
                              <p>Remember me</p>
                           </div>
                           <div className="forgot-pass">
                              <p>Forgot password?</p>
                           </div>
                        </div>

                        <button className="sign-in-butt">Sign in</button>

                        <button className="sign-in-bam" onClick={becomeAMember}>Become a member</button>

                        <div className="mem-info"><p>Membership info</p></div>
                     </div>
                  </div>
               </div>
               :
               <div></div>
            }
         </div>
      </>
   )
}

export default SignIn;
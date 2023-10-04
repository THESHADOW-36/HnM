import React from "react";
import "./BecomeAMember.css"
import { useNavigate } from "react-router-dom";


const BecomeAMember = () => {
   const router = useNavigate()

   function closeButton(){
      router("/")
   }
   function signInSite() {
      router("/sign-in")
   }
   return (
      <div className="bam-bg">
         <div className="bam-lay">
            <div className="bam">

               <div className="bam-top">
                  <p>BECOME A MEMBER</p>
                  <div className="close-mark" onClick={closeButton}><i class="fa-solid fa-xmark"></i></div>
               </div>
               <p className="voucher">Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>

               <form className="bam-form">
                  <label>Email <span className="star">*</span></label>
                  <br />
                  <div className="bam-input"><input type="text" /></div>
                  <div className="bam-password">
                     <label>Create a password <span className="star">*</span></label>
                     <br />
                     <div className="bam-input">
                        <input type="password" />
                     </div>
                     <p className="password-info">8 characters 1 lowercase 1 uppercase 1 number</p>
                  </div>

                  <label>Date of birth<span className="star">*</span></label>
                  <br />
                  <div className="bam-input">
                     <input type="number" />
                     <input type="number" />
                     <input type="number" />
                  </div>
                  <p className="dob-msg">H&M wants to give you a special treat on your birthday</p>
               </form>

               <div className="get-more-lay">
                  <div className="get-more-text">
                     <p>ADD MORE & GET MORE</p>
                     <div className="down-icon"><i class="fa-solid fa-angle-down"></i></div>
                  </div>
               </div>

               <div className="email-offer-lay">
                  <div className="email-offer">
                     <input type="checkbox" />
                     <p>Yes, email me offers, style updates, and special invites to sales and events.</p>
                  </div>
               </div>

               <div className="newsletter">
                  <p>
                     Wish your inbox was more stylish? No problem, just subscribe to our newsletter. Find out what's hot and happening in the world of fashion, beauty, and home decor. Plus, you'll get bonus vouchers, birthday offers, and special invites to sales and events – straight to your inbox!
                  </p>
               </div>

               <p className="i-agree-text">By clicking ‘Become a member’, I agree to the H&M Membership</p>

               <p className="terms-and-conditions">Terms and conditions.</p>

               <p className="privacy-notice">To give you the full membership experience, we will process your personal data in accordance with the H&M's <span>Privacy Notice.</span></p>

               <button className="bam-butt">Become a member</button>

               <button className="bam-bam-butt" onClick={signInSite}>Sign in</button>
            </div>
         </div>
      </div>
   )
}

export default BecomeAMember;
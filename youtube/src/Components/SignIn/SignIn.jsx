import React from "react";
import "./SignIn.css"
import googleLogo from "./../../Images/Google.png"

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="sign-in-layout">
        <div className="si-google-img"><img src={googleLogo} alt="" /></div>
        <p className="si-text">Sign in</p>
        <p className="si-continue-to-yt">to continue to YouTube</p>
        <div className="si-input">
          <input type="text" required />
          <label>Email or phone</label>
        </div>
        <div className="si-input">
          <input type="password" required />
          <label>Enter your password</label>
        </div>
        <div className="si-show-forget-pass">
          <div className="si-show-pass">
            <div className="si-sp-checkbox"><input type="checkbox" /></div>
            <p>Show password</p>
          </div>
          <p className="si-forget-password">Forget password?</p>
        </div>
        <div className="si-guest-mode-layout">
          <p className="si-guest-mode">Not your computer? Use Guest mode to sign in privately.</p>
          <p className="si-learn-more">Learn more</p>
        </div>
        <div className="si-create-one-next">
          <button className="si-creat-one-button">Create account</button>
          <button className="si-next-button">Next</button>
        </div>
      </div>

      
      <div className="si-country-terms">
        <div className="si-countries">
          <select>
            <option value="India">English (United States)</option>
            <option value="India">English (United Kingdom)</option>
            <option value="India">portuguese (Brasil)</option>
            <option value="India">Tamil</option>
            <option value="India">Hindi</option>
            <option value="India">Marathi</option>
          </select>
        </div>
        <div className="si-help-privacy-terms">
          <p>Help</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
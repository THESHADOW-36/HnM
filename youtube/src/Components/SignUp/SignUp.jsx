import React from "react";
import "./SignUp.css"
import googleLogo from "./../../Images/Google.png"

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up-layout">
        <div className="su-google-img"><img src={googleLogo} alt="" /></div>
        <p className="su-text">Sign up</p>
        <p className="su-create-google-account">Create a Google Account</p>

        <p className="su-input-titles">Enter your name</p>
        <div className="su-input">
          <input type="text" required />
          <label>First name</label>
        </div>
        <div className="su-input">
          <input type="text" required />
          <label>Surname (optional)</label>
        </div>

        <p className="su-input-titles">Enter your birthday and gender</p>
        <div className="su-dob-layout">
          <div className="su-dob-input">
            <input type="number" required />
            <label>Day</label>
          </div>
          <div className="su-dob-input">
            <input type="number" required />
            <label>Month</label>
          </div>
          <div className="su-dob-input">
            <input type="number" required />
            <label>Year</label>
          </div>
        </div>

        <div className="su-input">
          <input type="text" required />
          <label>Gender</label>
        </div>

        <p className="su-input-titles">Create your own Gmail Address</p>
        <div className="su-input">
          <input type="text" required />
          <label>Create a Gmail address</label>
        </div>

        <p className="su-input-titles">Create a strong password</p>
        <div className="su-input">
          <input type="text" required />
          <label>Password</label>
        </div>
        <div className="su-input">
          <input type="text" required />
          <label>Confirm Password</label>
        </div>

        <div className="su-show-pass">
          <div className="su-sp-checkbox"><input type="checkbox" /></div>
          <p>Show password</p>
        </div>

        <div className="su-privacy-terms">
          <div className="su-privacy">
            <div className="su-p-checkbox"><input type="checkbox" defaultChecked /></div>
            <p>Privacy and Terms</p>
          </div>
          <div className="su-privacy-details">
            <p>To create a Google Account, you'll need to agree to the <span>Terms of Services</span> below.</p>
            <p>You are also agreeing to the <span>Google Play Terms of Service</span> to enable discovery and management fo apps.</p>
            <p>In addition, when you create an account, we process your information as described in our <span>Privacy Policy</span>.</p>
          </div>
        </div>
        <div className="su-create-one-next">
          <button className="su-next-button">Next</button>
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
export default SignUp;
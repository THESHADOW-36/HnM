import React from "react";
import "./Footer.css"

const Footer = () => {

  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="footer1">
            <div className="f1-see-it-first">
              <p>SEE IT FIRST</p>
              <div className="f1-enter-email">
                <div className="f1-ee-input"><input type="text" placeholder="Enter your email address" /></div>
                <button>JOIN</button>
              </div>
              <p className="f1-sif-pp">PRIVACY POLICY</p>
            </div>

            <div className="f1-content">
              <h4>CUSTOMER SUPPORT</h4>
              <p>Customer Service</p>
              <p>Buy Online. Pick Up In-Store.</p>
              <p>Store Locator</p>
              <p>GapCash</p>
              <p>GiftCards</p>
            </div>

            <div className="f1-content">
              <h4>GAP GOOD REWARDS</h4>
              <p>Join Gap Good Rewards</p>
              <p>Apply for a Credit Card</p>
              <p>My Rewards & Benefits</p>
              <p>Pay Credit Card Bill</p>
              <p>Learn More</p>
            </div>
            <div className="f1-content">
              <h4>ABOUT US</h4>
              <p>Our Values</p>
              <p>Sustainability</p>
              <p>Equality and Belonging</p>
              <p>Careers</p>
              <p>Get the App</p>
            </div>
          </div>

          <div className="horizontal-line"></div>

          <div className="footer2">
            <p>© 2023 THE GAP, INC. | PRIVACY POLICY | YOUR PRIVACY CHOICES | YOUR CALIFORNIA PRIVACY RIGHTS | CALIFORNIA TRANSPARENCY IN SUPPLY CHAINS ACT | <br /> TERMS OF USE | CAREERS | SUSTAINABILITY | ABOUT GAP INC.</p>
            <p>AMERICANS WITH DISABILITIES ACT | GAP INC. POLICIES</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
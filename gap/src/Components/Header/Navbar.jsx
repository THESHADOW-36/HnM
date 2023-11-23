import React from "react";
import "./Navbar.css"
import { SearchBar, ShoppingBag } from "../Logos/Logos";

const Navbar = () => {

  return (
    <>
      <div className="navbar">

        <div className="navbar1">
          <div className="n1-websites">
            <p>GAP</p>
            <p>OLD NAVY</p>
            <p>BANANA REPUBLIC</p>
            <p>ATHLETA</p>
            <p>babyGap</p>
          </div>

          <div className="n1-reward-member">
            <p>Free Shipping on $50+ for Rewards Members</p>
            <p>SIGN IN OR JOIN</p>
            <p>DETAILS</p>
          </div>

          <div className="n1-signin-shopbag">
            <div className="n1-signin">
              <p>Sign In</p>
              <div className="n1-your-acc">
                <p>Your Account</p>
                <div className="n1-ya-downarrow"><i class="fa-solid fa-angle-down fa-sm"></i></div>
              </div>
            </div>

            <div className="vertical-line-1"></div>

            <div className="n1-shoppingbag"><ShoppingBag /></div>
          </div>
        </div>

        <div className="navbar-2">
          <div className="n2-category">
            <div className="n2-gap-logo"><img src="https://www.gap.com/Asset_Archive/GPWeb/content/0030/015/725/assets/logo/logo_gap--light.svg" alt="" /></div>
            <p>NEW</p>
            <p>WOMEN</p>
            <p>MEN</p>
            <p>GIRLS</p>
            <p>BOYS</p>
            <p>TODDLER</p>
            <p>BABY</p>
            <p>MATERNITY</p>
            <p>SALE</p>
            <p>THE GIFT SHOP</p>
          </div>

          <div className="n2-searchbar-layout">
            <p>Search:</p>
            <div className="n1-sb-input"><input type="text" placeholder="Hoodie"/></div>
            <div className="n1-sb-pause-logo"><i class="fa-solid fa-circle-pause fa-lg"></i></div>
            <div><SearchBar/></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar;
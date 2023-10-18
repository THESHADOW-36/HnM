import React from "react";
import Navbar3 from "../Header/Navbar3";
import Footer2 from "../Footer/Footer2";
import "./IPhone15Pro.css"

const IPhone15Pro = () => {
   return (
      <>
         <Navbar3 className="iPhone15pro-navba3" />

         <div className="iPhone15pro">
            <div className="iPhone15pro-bcc">
               <p>Save up to ₹6000.00 instantly on iPhone with HDFC Bank Credit Cards. Plus No Cost EMI from most leading banks.‡ <span>Shop iPhone</span></p>
               <div className="iPhone15pro-right-arrow"><i class="fa-solid fa-angle-right fa-2xs"></i></div>
            </div>

            <div className="iPhone15pro-img-bg">
               <div className="iPhone15pro-img">
                  <div className="iPhone15pro-text">
                     <p>iPhone 15 Pro</p>
                  </div>

                  <div className="iPhone15pro-buy">
                     <button className="iPhone15pro-buy-button">Buy</button>
                     <p>From ₹21483.00/mo.‡ or ₹134900.00*</p>
                  </div>
               </div>
            </div>
            <div className="iPhone15pro-get-highlights-bg">
               <div className="iPhone15pro-get-highlights">
                  <div className="iPhone15pro-get-highlights-text">
                     <p>Get the highlights.</p>
                     <div className="iPhone15pro-gh-film-event">
                        <div className="iPhone15pro-gh-film">
                           <p>Watch the film</p>
                           <div className="iPhone15pro-wtf-play-logo"><i class="fa-regular fa-circle-play"></i></div>
                        </div>
                        <div className="iPhone15pro-gh-event">
                           <p>Watch the event</p>
                           <div className="iPhone15pro-wte-rightarrow-logo"><i class="fa-solid fa-angle-right fa-xs"></i></div>
                        </div>
                     </div>
                  </div>

                  <div className="iPhone15pro-get-highlights-img">
                     <p>Titanium. </p>
                     <p>So strong. So light. So Pro.</p>
                  </div>
               </div>
            </div>

            <div className="iPhone15pro-closer-look-bg">
               <div className="iPhone15pro-closer-look">
                  <p className="iPhone15pro-cl-text">Take a closer look.</p>
                  <div className="iPhone15pro-cl-img">
                     <img src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/all_colors__eppfcocn9mky_large.jpg" alt="" />
                  </div>
                  <div className="iPhone15pro-four-colors">
                     <p>6.1” iPhone 15 Pro1 in four colours</p>
                     <div className="iPhone15pro-four-colors-palette">
                        <div className="iPhone15pro-fcp-0"><img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/closer-look/swatch_all_colors__c9qrpw0te4q6_large.jpg" alt="" /></div>
                        <div className="iPhone15pro-fcp-1"><i class="fa-solid fa-circle fa-xl"></i></div>
                        <div className="iPhone15pro-fcp-2"><i class="fa-solid fa-circle fa-xl"></i></div>
                        <div className="iPhone15pro-fcp-3"><i class="fa-solid fa-circle fa-xl"></i></div>
                        <div className="iPhone15pro-fcp-4"><i class="fa-solid fa-circle fa-xl"></i></div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="iPhone15pro-explore-full-story-bg">
               <div className="iPhone15pro-explore-full-story">
                  <p className="iPhone15pro-efs-text">Explore the full story.</p>
                  <div className="iPhone15pro-forged-in-titanium">
                     <p>iPhone. <br /> Forged in titanium.</p>

                     <div className="iPhone15pro-fit-img1">
                        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/design/titanium_endframe__jkbvub6cqj6u_large.jpg" alt="" />
                     </div>
                     <div className="iPhone15pro-fit-img-2-3">
                        <div className="iPhone15pro-fit-img2"><img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/design/lightest__boybgwifuehe_large.jpg" alt="" /></div>
                        <div className="iPhone15pro-fit-img3"><img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/design/durable__omxi3w443rue_large.jpg" alt="" /></div>
                     </div>

                     <div className="iPhone15pro-fit-details">
                        <div><p>iPhone 15 Pro is <span>the first iPhone to feature an aerospace‑grade titanium design</span>, using the same alloy that spacecraft use for missions to Mars.</p></div>
                        <div><p>Titanium has one of the best strength‑to‑weight ratios of any metal, making these our <span>lightest Pro models ever</span>. You’ll notice the difference the moment you pick one up.</p></div>
                     </div>

                     <div className="iPhone15pro-fit-more-design">
                        <div className="iPhone15pro-fit-more-design-box">
                           <p>More on design & display</p>
                           <div className="iPhone15pro-fit-md-add-logo-layout">
                              <div className="iPhone15pro-fit-md-add-logo"><i class="fa-solid fa-circle-plus"></i></div>
                              <div className="iPhone15pro-fit-md-add-logo-ws"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>







         </div>

         <Footer2 />
      </>
   )
}

export default IPhone15Pro;
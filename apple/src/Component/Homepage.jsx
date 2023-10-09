import React from "react";
import "./Homepage.css"

const Homepage = () => {

   return (
      <div className="homepage">
         <div className="navbar-bg"></div>
         <div className="bankoffers-ad">
            <p>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.*</p>
            <div className="bankoffers-ad-shopNow">
               <p>Shop now</p>
               <div className="bankoffers-right-logo"><i class="fa-solid fa-angle-right fa-xs"></i></div>
            </div>
         </div>

         <div className="iPhone-15-pro">
         </div>

         <div className="iPhone-15">
         </div>

         <div className="watch-series-9">
         </div>



         <div className="product-layout">
            <div className="apple-products">
               <div className="ipad-pro"></div>
            </div>

            <div className="apple-products">
               <div className="watch-ultra-2"></div>
            </div>

            <div className="apple-products">
               <div className="macBook-air-15"></div>
            </div>

            <div className="apple-products">
               <div className="airPods-pro"></div>
            </div>
            
            <div className="apple-products">
               <div className="trade-in"></div>
            </div>

            <div className="apple-products">
               <div className="homePod-mini"></div>
            </div>
         </div>

         <div className="tv-plus-layout">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/BkCQwrg5nkdzmB4uocPNhQ/980x551.jpg" alt="" />
         </div>
      </div>
   )
}

export default Homepage
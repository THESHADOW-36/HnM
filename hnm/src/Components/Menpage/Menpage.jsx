import React from "react";
import "./Menpage.css"


const Menpage = () => {
   return (
      <div className="men-page">
         <p className="hnm-homepage">HM.com / <span>H&M HOME</span></p>

         <div className="men-pg-lay">
            <div className="men-pg-cat">

               <div className="men-pg-cat-text">
                  <h4>Member Exclusive Prices</h4>
                  <p>Shop now</p>
               </div>

               <div className="men-pg-cat-text">
                  <h4>New Arrivals</h4>
                  <p>New Products</p>
               </div>

               <div className="men-pg-cat-text">
                  <h4>Shop by Room</h4>
                  <p>Bedroom</p>
                  <p>Living Room</p>
                  <p>Bathroom</p>
                  <p>Nursery</p>
                  <p>Kids Room</p>
                  <p>Kitchen</p>
                  <p>Balcony & Outdoor</p>
               </div>

               <div className="men-pg-cat-text">
                  <h4>Trending now</h4>
                  <p>Season news- Under Rs.999</p>
                  <p>Homely-gifts</p>
                  <p>Pop of colours</p>
               </div>

               <div className="men-pg-cat-text">
                  <h4>Shop by Product</h4>
                  <p>View All</p>
                  <p>Decorations</p>
                  <p>Cushions</p>
                  <p>Bed Linen</p>
                  <p>Room Fragrance</p>
                  <p>Serving & Dining</p>
                  <p>Cookware</p>
                  <p>Storage</p>
                  <p>Bath & Shower</p>
                  <p>Curtains</p>
                  <p>Sleepwear</p>
                  <p>Blankets</p>
                  <p>Giftwraps</p>
                  <p>Sale</p>
               </div>

               <div className="men-pg-cat-text">
                  <h4>Sustainability</h4>
                  <p>Meet the maker</p>
               </div>

            </div>


            <div className="men-pg-content">

               <div className="men-pg-img-1">
                  <div className="men-pg-bg">
                     <div className="men-pg-sect-1">
                        <div className="men-pg-tag-1">
                           <div className="tag-price">
                              <p>Rs. 1,499.00</p>
                              <p>Slim Fit Fine-knit pol...  <i class="fa-solid fa-angle-right"></i></p>
                           </div>
                           <div className="right-arrow-icon"><i class="fa-solid fa-caret-right"></i></div>
                        </div>
                     </div>
                     <div className="men-pg-sect-2">
                        <div className="men-pg-text-1">
                           <p>All knits needed</p>
                           <p>Go nowhere without knitwear. Conquer the classic looks & coordinated layers.</p>
                        </div>
                        <div className="pro-button">
                           <button className="shop-button">Shop now</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Menpage;
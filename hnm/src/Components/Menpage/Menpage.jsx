import React from "react";
import "./Menpage.css"
import { useNavigate } from "react-router-dom";


const Menpage = () => {
   const router = useNavigate()
   function homePageSite() {
      router("/")
   }
   return (
      <div className="men-page">
         <div className="hnm-director-text">
            <p onClick={homePageSite}>HM.com</p>
            <div className="hnm-slash">/</div>
            <p>Men</p>
         </div>
         <div className="men-pg-lay">
            <div className="men-pg-cat">

               <div className="men-pg-cat-text">
                  <h4>Member Exclusive Prices</h4>
                  <p>Shop now</p>
               </div>

               <div className="men-pg-cat-text">
                  <h4>New Arrivals</h4>
                  <p>View All</p>
                  <p>Clothes</p>
                  <p>Shoes & Accessories</p>
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
                  <p>T-shirts & Tops</p>
                  <p>Hoodies & Sweatshirts</p>
                  <p>Shirts</p>
                  <p>Shoes</p>
                  <p>Jackets & Coats</p>
                  <p>Cardigans & Jumpers</p>
                  <p>Suits & Blazers</p>
                  <p>Sportswear</p>
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

               <div className="men-pg-banner-category">
                  <div className="men-pg-banner-content">
                     <p>Dress sharp, spend smart!</p>
                     <p>Everything under ₹1999</p>
                     <div className="men-pg-ban-cat-button">
                        <button>Shop now</button>
                     </div>
                  </div>
               </div>

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

               <div className="new-looks-categories">
                  <p>New season, new looks!</p>
                  <div className="nl-cat-grid">

                     <div className="nl-cat-arrows">
                        <i class="fa-solid fa-arrow-left"></i>
                     </div>

                     <div className="nl-cat-content">
                        <div className="nl-cat-layout">
                           <img src="https://lp2.hm.com/hmgoepprod?set=source[/9a/ab/9aab209dfb5cd35b4b4fcce95a3fadbf1f7cbeed.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]" alt="" />
                           <p className="nl-cat">Relaxed Fit Zip-top sweatshirt</p>
                           <p className="nl-name">Rs.2,299.00</p>
                           <div className="nl-cat-colors-1">
                              <div><i class="fa-solid fa-circle"></i></div>
                              <div><i class="fa-solid fa-circle"></i></div>
                              <div><i class="fa-solid fa-circle"></i></div>
                           </div>
                        </div>
                     </div>

                     <div className="nl-cat-content">
                        <div className="nl-cat-layout">
                           <img src="https://lp2.hm.com/hmgoepprod?set=source[/e8/ba/e8baa968ff5222c997c2eb3af8c5fbc38f5bbc16.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]" alt="" />
                           <p className="nl-cat">Twill overshirt</p>
                           <p className="nl-name">Rs.2,699.00</p>
                           <div className="nl-cat-colors-2">
                              <div><i class="fa-solid fa-circle"></i></div>
                              <div><i class="fa-solid fa-circle"></i></div>
                              <div><i class="fa-solid fa-circle"></i></div>
                              <div><i class="fa-solid fa-circle"></i></div>
                           </div>
                        </div>
                     </div>

                     <div className="nl-cat-content">
                        <div className="nl-cat-layout">
                           <img src="https://lp2.hm.com/hmgoepprod?set=source[/97/ba/97ba4413e92cf6ccb761d5e96adccf4a6f9e19e6.jpg],origin[dam],category[men_jacketscoats_jackets],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]" alt="" />
                           <p className="nl-cat">Oversized Fit Baseball jacket</p>
                           <p className="nl-name">Rs.3,999.00</p>
                           <div className="nl-cat-colors-3">
                              <div><i class="fa-solid fa-circle"></i></div>
                           </div>
                        </div>
                     </div>

                     <div className="nl-cat-content">
                        <div className="nl-cat-layout">
                           <img src="https://lp2.hm.com/hmgoepprod?set=source[/c8/64/c864fe53cb08ffc61c1f20d1b0035f781a05777e.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]" alt="" />
                           <p className="nl-cat">Regular Fit Denim overshirt</p>
                           <p className="nl-name">Rs.2,699.00</p>
                           <div className="nl-cat-colors-4">
                              <div><i class="fa-solid fa-circle"></i></div>
                              <div><i class="fa-solid fa-circle"></i></div>
                           </div>
                        </div>
                     </div>

                     <div className="nl-cat-content">
                        <div className="nl-cat-layout">
                           <img src="https://lp2.hm.com/hmgoepprod?set=source[/a7/44/a74494dcda09dcc268390079a054ad496dcd03ff.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]" alt="" />
                           <p className="nl-cat">Loose Fit Cargo trousers</p>
                           <p className="nl-name">Rs.3,999.00</p>
                           <div className="nl-cat-colors-5">
                              <div><i class="fa-solid fa-circle"></i></div>
                              <div><i class="fa-solid fa-circle"></i></div>
                           </div>
                        </div>
                     </div>

                     <div className="nl-cat-content">
                        <div className="nl-cat-layout">
                           <img src="https://lp2.hm.com/hmgoepprod?set=source[/cd/05/cd0555a5a3d0492f32ca44d00796b6fa7d681ba5.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]" alt="" />
                           <p className="nl-cat">Regular Fit Flannel shirt</p>
                           <p className="nl-name">Rs.1,999.00</p>
                           <div className="nl-cat-colors-6">
                              <div><i class="fa-solid fa-circle"></i></div>
                              <div><i class="fa-solid fa-circle"></i></div>
                           </div>
                           <p className="nl-member-price">Member price...</p>
                        </div>
                     </div>

                     <div className="nl-cat-arrows">
                        <i class="fa-solid fa-arrow-right"></i>
                     </div>
                  </div>

               </div>

               <div className="spcl-treat-banner">
                  <div className="spcl-treat-banner-text">
                     <p>Special treat: Member exclusive prices</p>
                     <p>Explore to enjoy exclusive styles for less!</p>
                  </div>
                  <div className="info-icon">
                     i
                  </div>
               </div>

               <div className="men-pg-img-2">
                  <div className="men-pg-bg">
                     <div className="men-pg-sect-1">
                        <div className="men-pg-text-2">
                           <p>A/W2023</p>
                        </div>
                        <div className="pro-button">
                           <button className="shop-button">Shop now</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="men-pg-img-3">
                  <div className="men-pg-bg">
                     <div className="men-pg-sect-1">
                        <div className="men-pg-text-3">
                           <p>Wear the attitude, own the street</p>
                           <p>Explore our new arrivals</p>
                        </div>
                        <div className="pro-button">
                           <button className="shop-button">Shop now</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="men-clothing-text">
                  <p>Men's Clothing</p>
                  <p>Check out all the freshest styles your closet needs in our men's clothing range. You'll find a roundup of everyday essentials, including tops and T-Shirts, as well as comfy lounge sets and underwear. Formal event coming up? Scroll no further than our men's blazers and suits for the sharpest looks and nail the dress code. When it comes to <span>men's pants</span>, there's chinos, joggers and cargo styles in all the staple colors.</p>
                  <p>Read more</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Menpage;
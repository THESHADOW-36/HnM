import React, { useState } from "react";
import "./Homepage.css"
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

const Homepage = () => {
  // eslint-disable-next-line
  const [bigDealImg, setBigDealImg] = useState([
    {
      img1: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweaters_Hover_DESK",
      img2: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweaters_Default_DESK",
      name: "Sweaters from $22",
      cat: "Kids' & Baby from $15"
    },
    {
      img1: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweats_Hover_DESK",
      img2: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweats_Default_DESK",
      name: "Sweaters from $22",
      cat: "Kids' & Baby from $15"
    },
    {
      img1: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Tees_Hover_DESK",
      img2: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Tees_Default_DESK",
      name: "Tees from $12",
      cat: "Kids' & Baby from $7"
    },
    {
      img1: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_PJs_Hover_DESK",
      img2: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_PJs_Default_DESK",
      name: "PJs from $15",
      cat: "Kids' & Baby from $10"
    }
  ])

  // eslint-disable-next-line
  const [blackFriDeal, setBlackFriDeal] = useState([
    {
      img: "https://www.gap.com/webcontent/0052/199/478/cn52199478.jpg",
      name: "High Rise Cheeky Straight Jeans"
    },
    {
      img: "https://www.gap.com/webcontent/0054/568/051/cn54568051.jpg",
      name: "High Rise Classic Straight Jeans"
    },
    {
      img: "https://www.gap.com/webcontent/0052/436/788/cn52436788.jpg",
      name: "Modern Crewneck T-Shirt"
    },
    {
      img: "https://www.gap.com/webcontent/0053/798/508/cn53798508.jpg",
      name: "Vintage Soft Hoodie"
    },
    {
      img: "https://www.gap.com/webcontent/0029/449/803/cn29449803.jpg",
      name: "Vintage Soft Classic Joggers"
    }
  ])

  // eslint-disable-next-line
  const [shopByDiv, setShopByDiv] = useState([
    {
      img: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_Women_DESK",
      name: "WOMEN"
    },
    {
      img: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_Men_DESK",
      name: "MEN"
    },
    {
      img: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_Girls_DESK",
      name: "GIRLS"
    },
    {
      img: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_Boys_DESK",
      name: "BOYS"
    },
    {
      img: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_ToddlerGirl_DESK",
      name: "TODDLER GIRL"
    },
    {
      img: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_ToddlerBoy_DESK",
      name: "TODDLER BOY"
    },
    {
      img: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_BabyGirl_DESK",
      name: "BABY GIRL"
    },
    {
      img: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_BabyBoy_DESK",
      name: "BABY BOY"
    },
  ])

  return (
    <div className="homepage-container">
      <Navbar />

      <div className="homepage">
        <div className="ad-banner">
          <p className="ad-bfs">Black Friday Sale</p>
          <p className="ad-offer">40% OFF EVERYTHING</p>
          <p className="ad-treat">Because it's treat everyone season.</p>
        </div>

        <div className="hp-category-layout">
          <div className="hp-categories">
            <button>WOMEN</button>
            <button>MATERNITY</button>
            <button>MEN</button>
            <button>GIRLS</button>
            <button>BOYS</button>
            <button>TODDLER GIRL</button>
            <button>TODDLER BOY</button>
            <button>BABY GIRL</button>
            <button>BABY BOY</button>
          </div>
        </div>

        <div className="hp-big-deal">
          <p className="hp-big-deal-text1">60% Off Really Big Deals</p>
          <div className="hp-bd-text-flex">
            <p className="hp-big-deal-text2">For wrapping & keeping.</p>
            <p className="hp-big-deal-text3">Online only. <span>DETAILS</span></p>
          </div>

          <div className="hp-bd-layout">
            {bigDealImg.length && bigDealImg.map((bigdeal) => (
              <div className="hp-bd">
                <div className="hp-bd-img">
                  <div className="hp-bd-img1"><img src={bigdeal.img1} alt="" /></div>
                  <div className="hp-bd-img2"><img src={bigdeal.img2} alt="" /></div>
                </div>
                <div className="hp-bd-content">
                  <div className="hp-bd-text">
                    <p className="hp-bd-name">{bigdeal.name}</p>
                    <p className="hp-bd-cat">{bigdeal.cat}</p>
                  </div>
                  <button>SHOP NOW +</button>
                </div>
              </div>
            ))}
          </div>

          <div className="hp-black-friday-deals">
            <p className="hp-black-friday-deals-text">Black Friday Deals You'll Love</p>
            <div className="hp-bfd-layout">
              {blackFriDeal.length && blackFriDeal.map((bfd) => (
                <div className="hp-bfd">
                  <div className="hp-bfd-img"><img src={bfd.img} alt="" /></div>
                  <p className="hp-bfd-name">{bfd.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hp-shop-by-division">
            <p className="hp-shop-by-division-text">Shop by Division</p>
            <div className="hp-sbd-layout">
              {shopByDiv.length && shopByDiv.map((sbd)=>(
                <div className="hp-sbd">
                  <div className="hp-sbd-img"><img src={sbd.img} alt="" /></div>
                  <p className="hp-sbd-name">{sbd.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Homepage;
import React from "react";
import './Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

function Homepage() {
	return (
		<div className="body-bg">
			<div className="body-content">
				<div className="offers-appDownload">
					<div><p>Members get free shipping above Rs.1999</p></div>
					<div><p>Free & flexible 15 days return</p></div>
					<div><p>Download the H&M App</p></div>
				</div>

				<div className="product-img">
					<div className="pro-bg">
						<div className="pro-sect-1">
							<div className="pro-tag">
								<div className="left-arrow-icon"><FontAwesomeIcon icon={faCaretLeft} /></div>
								<div className="tag-price">
									<p>Rs. 4,999.00</p>
									<p>Frilled tulle top ></p>
								</div>
							</div>
						</div>
						<div className="pro-sect-2">
							<div className="pro-text">
								<p>STUDIO</p>
								<p>The A/W 2023 collection is out now.</p>
							</div>
							<div className="pro-button">
								<button className="shop-button">SHOP NOW</button>
								<button className="inspired-button">GET INSPIRED</button>
							</div>
						</div>
					</div>
				</div>

				<div className="product-img-2">
					<div className="pro-bg">
						<div className="pro-sect-1">
							<div className="pro-tag-2">
								<div className="tag-price">
									<p>Rs. 1,499.00</p>
									<p>Slim Fit Fine-knit pol...  ></p>
								</div>
								<div className="right-arrow-icon"><FontAwesomeIcon icon={faCaretRight} /></div>
							</div>
						</div>
						<div className="pro-sect-2">
							<div className="pro-text-2">
								<p>All knits needed</p>
								<p>Go nowhere without knitwear. Conquer the classic looks & coordinated layers.</p>
							</div>
							<div className="pro-button">
								<button className="shop-button">Shop now</button>
							</div>
						</div>
					</div>
				</div>

				<div className="banner-category">
					<div className="banner-content">
						<p>A/W23 WARDROBE WINS</p>
						<p>Key staples for the season ahead!</p>
						<div className="ban-cat-button">
							<button>Ladies</button>
							<button>Men</button>
							<button>Divided</button>
							<button>Kids</button>
						</div>
					</div>
				</div>

				<div className="popular-categories">
					<p>Popular categories</p>
					<div className="pop-grid">
						<div className="pop-cat-content">
							<div className="pop-cat-layout">
								<img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />
								<p className="pop-cat">Ladies</p>
								<p className="pop-name">Tops & T-shirts</p>
							</div>
						</div>

						<div className="pop-cat-content">
							<div className="pop-cat-layout">
								<img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />
								<p className="pop-cat">Ladies</p>
								<p className="pop-name">Tops & T-shirts</p>
							</div>
						</div>

						<div className="pop-cat-content">
							<div className="pop-cat-layout">
								<img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />
								<p className="pop-cat">Ladies</p>
								<p className="pop-name">Tops & T-shirts</p>
							</div>
						</div>

						<div className="pop-cat-content">
							<div className="pop-cat-layout">
								<img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />
								<p className="pop-cat">Ladies</p>
								<p className="pop-name">Tops & T-shirts</p>
							</div>
						</div>

						<div className="pop-cat-content">
							<div className="pop-cat-layout">
								<img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />
								<p className="pop-cat">Ladies</p>
								<p className="pop-name">Tops & T-shirts</p>
							</div>
						</div>

						<div className="pop-cat-content">
							<div className="pop-cat-layout">
								<img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />
								<p className="pop-cat">Ladies</p>
								<p className="pop-name">Tops & T-shirts</p>
							</div>
						</div>

						<div className="pop-cat-content">
							<div className="pop-cat-layout">
								<img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />
								<p className="pop-cat">Ladies</p>
								<p className="pop-name">Tops & T-shirts</p>
							</div>
						</div>

						<div className="pop-cat-content">
							<div className="pop-cat-layout">
								<img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />
								<p className="pop-cat">Ladies</p>
								<p className="pop-name">Tops & T-shirts</p>
							</div>
						</div>
					</div>

				</div>

				<div className="product-img-3">
					<div className="pro-bg">
						<div className="pro-sect-1">
							<div className="pro-tag-3">
								<div className="tag-price">
									<p>Rs. 1,499.00</p>
									<p>Oversized jacquard-k...  ></p>
								</div>
								<div className="right-arrow-icon"><FontAwesomeIcon icon={faCaretRight} /></div>
							</div>
						</div>
						<div className="pro-sect-2">
							<div className="pro-text-3">
								<p>It's cabin chic, but not really</p>
								<p>Styles inspired by the great outdoors.</p>
							</div>
							<div className="pro-button">
								<button className="shop-button">Shop now</button>
							</div>
						</div>
					</div>
				</div>

				<div className="new-arrivals">
					<p>New Arrivals</p>
					<div className="arrivals-cat">
						<button>Ladies</button>
						<button>Men</button>
						<button>Divided</button>
						<button>Baby</button>
						<button>Kids</button>
						<button>H&M HOME</button>
						<button>Sport</button>
					</div>

					<div className="arrivals-poster">
						<div className="">
							<div className="arrivals-pic">
								heart
							</div>
							<p>Tie-neck maxi dress</p>
							<p>Rs.5999.00</p>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Homepage
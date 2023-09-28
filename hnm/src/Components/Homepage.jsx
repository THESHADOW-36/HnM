import React from "react";
import './Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

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
								<div className="left-arrow-icon"><FontAwesomeIcon icon={faCaretLeft} /></div>
								<div className="tag-price">
									<p>Rs. 4,999.00</p>
									<p>Frilled tulle top ></p>
								</div>
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
			</div>
		</div>
	)
}

export default Homepage
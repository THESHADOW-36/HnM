import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faPinterest, faSquareFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
	return (
		<div className="footer-bg">
			<div className="footer-content">
				<div className="footer-category">
					<div className="shop">
						<h3>SHOP</h3>
						<p>Ladies</p>
						<p>Men</p>
						<p>Baby</p>
						<p>Kids</p>
						<p>H&M HOME</p>
						<p>Sport</p>
					</div>
					<div className="corporate-info">
						<h3>CORPORATE INFO</h3>
						<p>Career at H&M</p>
						<p>About H&M group</p>
						<p>Sustainability H&M Group</p>
						<p>Press</p>
						<p>Investor relations</p>
						<p>Corporate governance</p>
					</div>
					<div className="help">
						<h3>HELP</h3>
						<p>Customer Service</p>
						<p>My H&M</p>
						<p>Find a store</p>
						<p>Legal & Privacy</p>
						<p>Contact</p>
						<p>Report a scam</p>
						<p>Cookie Notice</p>
						<h4>Cookie Settings</h4>
					</div>
					<div className="description ">
						<p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p>
						<div className="readmore">
							<p>Read more</p>
							<div className="arrowRight-icon"><FontAwesomeIcon icon={faArrowRight} /></div>
						</div>
					</div>
				</div>

				<div className="social-media-logos">
					<div className="facebook-logo"><FontAwesomeIcon icon={faSquareFacebook} /></div>
					<div className="twitter-logo"><FontAwesomeIcon icon={faTwitter} /></div>
					<div className="insta-logo"><FontAwesomeIcon icon={faInstagram} /></div>
					<div className="youtube-logo"><FontAwesomeIcon icon={faYoutube} /></div>
					<div className="pinterest-logo"><FontAwesomeIcon icon={faPinterest} /></div>
				</div>

				<div className="copyright-text">
					<p>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</p>
				</div>

				<div className="hnm-logo">
					<img src="https://mirum.naturalfiberwelding.com/hubfs/partner-logos/H%26M-b.png" alt="" />
				</div>

				<div className="country-name">
					<p>INDIA | Rs.</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
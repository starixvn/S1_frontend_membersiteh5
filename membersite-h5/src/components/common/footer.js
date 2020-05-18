import React from "react";
import { Link } from "gatsby";

const Footer = () => {
	return (
		<footer>
			<Link to="/">
				<button className="open">
					<div className="circleAnimation">
						<div className="icon icon-home"></div>
					</div>
					<span>HOME</span>
				</button>
			</Link>

			<Link to="/hello/">
				<button className="">
					<div className="circleAnimation">
						<div className="icon icon-promotion"></div>
					</div>
					<span>PROMOTION</span>
				</button>
			</Link>

			<button className="">
				<div className="circleAnimation">
					<div className="icon icon-balance"></div>
				</div>
				<span>WALLET</span>
			</button>

			<button className="">
				<div className="circleAnimation">
					<div className="icon icon-contact"></div>
				</div>
				<span>LIVE CHAT</span>
			</button>

			<button className="">
				<div className="circleAnimation">
					<div className="icon icon-member"></div>
				</div>
				<span>MEMBER</span>
			</button>
		</footer>
	);
};

export default Footer;

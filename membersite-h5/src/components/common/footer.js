import React, { useContext } from "react";
import { Link } from "gatsby";
import { Geti18n } from "../../service/language";
import { userInfoContext } from "../context/userInfo";

const Footer = () => {
	const { userInfo } = useContext(userInfoContext);
	if (userInfo?.isLogin) {
		return (
			<footer>
				<Link to="/" activeClassName="open">
					<div className="circleAnimation">
						<div className="icon icon-home"></div>
					</div>
					<span>{Geti18n("lbl_Home")}</span>
				</Link>

				<Link to="/promotion/" activeClassName="open">
					<div className="circleAnimation">
						<div className="icon icon-promotion"></div>
					</div>
					<span>PROMOTION</span>
				</Link>

				<Link to="/wallet/" activeClassName="open">
					<div className="circleAnimation">
						<div className="icon icon-balance"></div>
					</div>
					<span>WALLET</span>
				</Link>

				<Link to="/livechat/" activeClassName="open">
					<div className="circleAnimation">
						<div className="icon icon-contact"></div>
					</div>
					<span>LIVE CHAT</span>
				</Link>

				<Link to="/member/" activeClassName="open">
					<div className="circleAnimation">
						<div className="icon icon-member"></div>
					</div>
					<span>MEMBER</span>
				</Link>
			</footer>
		);
	} else {
		return (
			<footer>
				<Link to="/" activeClassName="open">
					<div className="circleAnimation">
						<div className="icon icon-home"></div>
					</div>
					<span>{Geti18n("lbl_Home")}</span>
				</Link>

				<Link to="/promotion/" activeClassName="open">
					<div className="circleAnimation">
						<div className="icon icon-promotion"></div>
					</div>
					<span>PROMOTION</span>
				</Link>

				<Link to="/wallet/" activeClassName="open">
					<div className="circleAnimation">
						<div className="icon icon-balance"></div>
					</div>
					<span>WALLET</span>
				</Link>

				<Link to="/livechat/" activeClassName="open">
					<div className="circleAnimation">
						<div className="icon icon-contact"></div>
					</div>
					<span>LIVE CHAT</span>
				</Link>
			</footer>
		);
	}
};

export default Footer;

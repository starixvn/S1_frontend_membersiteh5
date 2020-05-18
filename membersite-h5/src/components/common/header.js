import React, { Component } from "react";
import logoItem from "../../styles/Nova88/img/logo.svg";

class Header extends Component {
	render() {
		return (
			<header>
				<a href="#">
					<img src={logoItem} alt="logo" />
				</a>
				<div className="headerButton"></div>
				<NavBtn />
			</header>
		);
	}
}

class NavBtn extends Component {
	render() {
		return (
			<div className={`close`}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		);
	}
}

export default Header;

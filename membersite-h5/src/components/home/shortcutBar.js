import React from "react";

const ShortcutBar = () => {
	return (
		<div className="thBar">
			<a className="icon icon-deposit">
				<span>Deposit</span>
			</a>
			<a className="icon icon-transfer">
				<span>Transfer</span>
			</a>
			<a className="icon icon-withdrawal">
				<span>Withdrawal</span>
			</a>
			<a className="icon icon-email">
				<span>Email</span>
			</a>
			<a className="icon icon-vip">
				<span>VIP LV100</span>
			</a>
		</div>
	);
};

export default ShortcutBar;

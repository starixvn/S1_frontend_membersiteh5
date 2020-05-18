import React from "react";

const Marquee = () => {
	return (
		<div id="Marquee">
			<div className="icon icon-marquee"></div>
			<div className="marquee-box">
				<div className="marquee-run" style={{ right: "-690.606px" }}>
					<button>
						【维护1 - 沙龙真人】 :
						尊敬的客户：为了给您带来更好的游戏体验和产品，沙龙真人于每个星期一11；00—13；30（北京时间）进行临时维护，给您带来不便，敬请您谅解，谢谢！
					</button>
					<button>
						【维护2 - 沙龙真人】 :
						尊敬的客户：为了给您带来更好的游戏体验和产品，沙龙真人于每个星期一11；00—13；30（北京时间）进行临时维护，给您带来不便，敬请您谅解，谢谢！
					</button>
				</div>
			</div>
		</div>
	);
};

export default Marquee;

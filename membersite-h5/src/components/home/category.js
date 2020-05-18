import React from 'react';

const Category = () => {
    return (
        <div id="content">
            <div className="sideBar">
                <button className="icon icon-sports open">
                    <div>SPORTS</div>
                </button>
                <button className="icon icon-virtualsports">
                    <div>VIRTUAL SPORTS</div>
                </button>
                <button className="icon icon-livecasino">
                    <div>LIVE CASINO</div>
                </button>
                <button className="icon icon-casino">
                    <div>CASINO</div>
                </button>
                <button className="icon icon-game">
                    <div>GAME</div>
                </button>
                <button className="icon icon-keno">
                    <div>KENO &amp; LOTTERY</div>
                </button>
            </div>
            <div className="gameList">
                <a className="icon icon-soccer"></a>
                <a className="icon icon-baseball"></a>
                <a className="icon icon-basketball"></a>
                <a className="icon icon-badminton"></a>
                <a className="icon icon-esport"></a>
                <a className="icon icon-tennis"></a>
                <a className="icon icon-football"></a>
                <a className="icon icon-F1"></a>
            </div>
        </div>
    )
}

export default Category;
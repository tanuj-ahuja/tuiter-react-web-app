import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
                <b>Who to follow</b></a>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem key={who.userName} who={who}/>)
            }
        </div>
    );
};

export default WhoToFollowList;
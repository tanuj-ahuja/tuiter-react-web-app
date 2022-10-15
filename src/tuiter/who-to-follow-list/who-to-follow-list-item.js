import React from "react";

const WhoToFollowListItem = (
    {
        who = {userName: 'NASA', handle: 'NASA', avatarIcon: '../../images/nasa.png'}
    }
    ) => {
    return(
            <div className="card" style={{"maxWidth": 540}}>
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={who.avatarIcon} className="p-2 rounded-circle img-fluid wd-follow-logo" height="50px" width="50px" alt="..."/>
                </div>
                <div className="col-md-10">
                    <div className="card-body p-1">
                        <button className="btn btn-primary rounded-pill float-end">
                            Follow
                        </button>
                        <h6 className="card-title mt-1 mb-0" style={{"fontSize": 15+"px"}}><b>{who.userName}</b> <span className="fa-stack fa-1x" style={{"fontSize": "6px"}}>
                            <i className="fas fa-solid fa-stack-2x fa-circle"></i>
                            <i className="fas fa-solid fa-stack-1x fa-check" style={{"color": "white"}}></i>
                        </span></h6>
                        <p className="card-text"><small className="text-muted" style={{"fontSize": 14+"px"}}>@{who.handle}</small></p>
                    </div>
                </div>
            </div>
            </div>
    )
};

export default WhoToFollowListItem;
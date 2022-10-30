import React from "react";
import tuitsArray from "../tuits.json"
import TuitItem
    from "../tuit-item/index";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem tuit={tuit}/> )
            }
        </ul>
    );
};
export default PostSummaryList;


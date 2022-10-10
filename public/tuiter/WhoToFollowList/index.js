import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <div class="list-group">
           <a href="#" class="list-group-item list-group-item-action">
                    <b>Who to follow</b></a>
           ${who.map(item => WhoToFollowListItem(item)).join('')}
           </div>
`); }

export default WhoToFollowList;


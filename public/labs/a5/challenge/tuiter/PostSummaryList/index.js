import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";


const PostSummaryList = () => {
    return (`
           <div class="list-group">
           ${posts.map(item => PostSummaryItem(item)).join('')}
           </div>`);
}

export default PostSummaryList;
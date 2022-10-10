import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
                    <div class="wd-search-panel col-10">
    <form>
        <div class="wd-grid-col-left wd-input-icons">
            <i class="wd-icon">&#x1F50D;</i>
    <input class="wd-search-box" id="text-fields-username" placeholder="Search Tuiter"/>
        </div>

</form>

        </div>
        <div class="wd-grid-col-right col-1">
            <a class="wd-settings" href="explore-settings.html"><i class="fas fa-solid fa-cog wd-settings"></i></a>
        </div>

<div class="wd-grid-row-links pt-1 pb-1">
    <div class="wd-grid-col-left">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
    </div>
</div>
        <br><br>
<div class="wd-top-img">
    <img src="starship.png" style="max-width: 100%; max-height: 100%;">
    <div class="wd-bottom-left"><b>SpaceX's Starship</b></div>
</div>


<div class="wd-trends">
    ${PostSummaryList()}
</div>
    `);
}
export default ExploreComponent;

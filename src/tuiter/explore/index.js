import PostSummaryList from "../tuits/tuits-list";

const ExploreComponent = () => {
    return(
        <div>
            <div className="row">
                    <div className="wd-search-panel col-11">
        <div className="wd-input-icons">
            <i className="wd-icon">&#x1F50D;</i>
    <input className="wd-search-box" id="text-fields-username" placeholder="Search Tuiter"/>
        </div>


        </div>
        <div className="col-1">
            <a className="wd-settings" href="explore-settings.html"><i className="bi bi-gear wd-settings"></i></a>
        </div>
            </div>

<div className="wd-grid-row-links pt-1 pb-1">
    <div className="wd-grid-col-left">
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link active" href="for-you.html">For You</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="trending.html">Trending</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="news.html">News</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="sports.html">Sports</a>
            </li>
            <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
    </div>
</div>
        <br/><br/>
<div className="wd-top-img">
    <img src="../../images/starship.png" style={{"maxWidth": 100+"%", "maxHeight": 100+"%"}}/>
    <div className="wd-bottom-left"><b>SpaceX's Starship</b></div>
</div>


<div className="wd-trends pt-2">
    {PostSummaryList()}
</div>
        </div>
    )
};

export default ExploreComponent;

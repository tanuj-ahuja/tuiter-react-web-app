function exploreCompoent() {
    $('#wd-explore').append(`
        <div class="container wd-flex-container pt-2">
<div class="row container-global">
    <div class="col-xxl-3 col-xl-2 col-lg-1 col-md-2 col-sm-2">
    <div class="list-group pb-1">
        <a href="#" class="list-group-item list-group-item-action wd-sidebar-item">
            <i class="fab fa-twitter fa-1x"></i></a>
        <a href="../home.html" class="list-group-item list-group-item-action wd-sidebar-item" style="display: flex">
            <i class="fa fa-home fa-1x wd-first-sidebar-icons"></i> <nobr class="d-none d-xl-block">Home</nobr></a>
        <a href="../explore/index.html" class="list-group-item list-group-item-action active wd-sidebar-item" style="display: flex">
            <i class="fa fa-hashtag fa-1x wd-first-sidebar-icons"></i> <nobr class="d-none d-xl-block">Explore</nobr></a>
        <a href="#" class="list-group-item list-group-item-action wd-sidebar-item" style="display: flex">
            <i class="fa fa-bell fa-1x wd-first-sidebar-icons"></i> <nobr class="d-none d-xl-block">Notifications</nobr></a>
        <a href="#" class="list-group-item list-group-item-action wd-sidebar-item" style="display: flex">
            <i class="fa fa-envelope fa-1x wd-first-sidebar-icons"></i> <nobr class="d-none d-xl-block">Messages</nobr>
        </a>
        <a href="../bookmarks/index.html" class="list-group-item list-group-item-action wd-sidebar-item" style="display: flex">
            <i class="fa fa-bookmark fa-1x wd-first-sidebar-icons"></i><nobr class="d-none d-xl-block">Bookmarks</nobr></a>
        <a href="#" class="list-group-item list-group-item-action wd-sidebar-item" style="display: flex">
            <i class="fa fa-list fa-1x wd-first-sidebar-icons"></i><nobr class="d-none d-xl-block">Lists</nobr></a>
        <a href="../profile.html" class="list-group-item list-group-item-action wd-sidebar-item" style="display: flex">
            <i class="fa fa-user fa-1x wd-first-sidebar-icons"></i> <nobr class="d-none d-xl-block">Profile</nobr></a>
        <a href="../profile.html" class="list-group-item list-group-item-action wd-sidebar-item" style="display: flex">
<!--            <span class="fa-stack-1x">-->
<!--                <i class="fa fa-ellipsis-h fa-stack-1x" style="color: white"></i>-->
<!--                <i class="fa fa-circle fa-stack-1x" style="color: black"></i>-->
<!--            </span>  More</a>-->
        <span class="fa-stack fa-1x wd-first-sidebar-icons" style="font-size: 7px">
                                                <i class="fas fa-stack-2x fa-circle" style="color: black"></i>
                                    <i class="fas fa-stack-1x fa-ellipsis-h" style="color: white"></i>
        </span><nobr class="d-none d-xl-block">More</nobr> </a>
    </div>
        <button class="w-100 btn btn-primary rounded-pill">
            Tuit
        </button>
    </div>

    <div class="col-xxl-6 col-xl-7 col-lg-7 col-md-10 col-sm-10">
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
    <div class="list-group">
        <div class="card" style="max-width: 100%;">
            <div class="row g-0">

                <div class="col-9">
                    <div class="card-body override-bs">
                        <p class="card-text" style="margin: 0px"><small class="text-muted" style="font-size: 14px">Web Development</small></p>
                        <b class="card-title" style="font-size: 15px;" >React JS <span class="fa-stack fa-1x" style="font-size: 6px">
                                    <i class="fas fa-solid fa-stack-2x fa-circle"></i>
                            <i class="fas fa-solid fa-stack-1x fa-check" style="color: white"></i></span></b>
                                 - <small class="text-muted">2h</small>
                        <div></div><strong style="font-size: 14px;">React.js is a component based frontend library that makes it very easy to make Single Page Applications or SPAs</strong></div>

                    </div>
                <div class="col-3">
                    <img src="react.png" class="img-fluid  fa-pull-right pt-2 pb-1 ps-1 pe-1" height="100px" width="100px" alt="...">
                </div>
            </div>
        </div>
        <div class="card" style="max-width: 100%;">
            <div class="row g-0">

                <div class="col-9">
                    <div class="card-body override-bs">
                        <b class="card-title" style="font-size: 15px;" >JavaScript <span class="fa-stack fa-1x" style="font-size: 6px">
                                    <i class="fas fa-solid fa-stack-2x fa-circle"></i>
                            <i class="fas fa-solid fa-stack-1x fa-check" style="color: white"></i></span></b>
                        - <small class="text-muted">2h</small>

                        <div></div><strong style="font-size: 14px;">JavaScript is a programming language that can run on browsers as well as desktops</strong>
                        <p class="card-text" style="margin: 0px"><small class="text-muted" style="font-size: 14px">123K Tweets</small></p>
                    </div>

                </div>
                <div class="col-3">
                    <img src="js.png" class="img-fluid wd-trends-image fa-pull-right pt-2 pb-1 ps-1 pe-1" height="100px" width="100px" alt="...">
                </div>
            </div>
        </div>
        <div class="card" style="max-width: 100%;">
            <div class="row g-0">

                <div class="col-9">
                    <div class="card-body override-bs">
                        <p class="card-text" style="margin: 0px"><small class="text-muted" style="font-size: 14px">Web Development</small></p>
                        <b class="card-title" style="font-size: 15px;" >JQuery </b>
                        <p class="card-text" style="margin: 0px"><small class="text-muted" style="font-size: 14px">123K Tweets</small></p>
                    </div>

                </div>
                <div class="col-3">
                    <img src="jquery.png" class="img-fluid wd-trends-image fa-pull-right pt-2 pb-1 ps-1 pe-1" height="100px" width="100px" alt="...">
                </div>
            </div>
        </div>
        <div class="card" style="max-width: 100%;">
            <div class="row g-0">

                <div class="col-9">
                    <div class="card-body override-bs">
                        <p class="card-text" style="margin: 0px"><small class="text-muted" style="font-size: 14px">Web Development</small></p>
                        <b class="card-title" style="font-size: 15px;" >NodeJS <span class="fa-stack fa-1x" style="font-size: 6px">
                                    <i class="fas fa-solid fa-stack-2x fa-circle"></i>
                            <i class="fas fa-solid fa-stack-1x fa-check" style="color: white"></i></span> </b> - 2h
                        <p class="card-text" style="margin: 0px"><small class="text-muted" style="font-size: 14px">123K Tweets</small></p>
                    </div>

                </div>
                <div class="col-3">
                    <img src="node.png" class="img-fluid wd-trends-image fa-pull-right pt-2 pb-1 ps-1 pe-1" height="100px" width="100px" alt="...">
                </div>
            </div>
        </div>
    </div>

    </div>
    </div>


    <div class="col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block">
        <div class="wd-sidebar">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <b>Who to follow</b></a>
                <div class="card" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-2">
                            <img src="java.png" class="img-fluid rounded-start wd-follow-logo" height="36px" width="36px" alt="...">
                        </div>
                        <div class="col-md-10">
                            <div class="card-body override-bs">
                                <button class="btn btn-primary wd-follow-button fa-pull-right">
                                    Follow
                                </button>
                                <h7 class="card-title" style="font-size: 15px;" ><b>Java</b> <span class="fa-stack fa-1x" style="font-size: 6px">
                                    <i class="fas fa-solid fa-stack-2x fa-circle"></i>
                                    <i class="fas fa-solid fa-stack-1x fa-check" style="color: white"></i>
                                </span></h7>
                                <p class="card-text"><small class="text-muted" style="font-size: 14px">@Java</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-2">
                            <img src="space.png" class="img-fluid wd-follow-logo" height="36px" width="36px" alt="...">
                        </div>
                        <div class="col-md-10">
                            <div class="card-body override-bs">
                                <button class="btn btn-primary wd-follow-button fa-pull-right">
                                    Follow
                                </button>
                                <h7 class="card-title" style="font-size: 15px;" ><b>Relativity space</b> <span class="fa-stack fa-1x" style="font-size: 6px">
                                    <i class="fas fa-solid fa-stack-2x fa-circle"></i>
                                    <i class="fas fa-solid fa-stack-1x fa-check" style="color: white"></i>
                                </span></h7>
                                <p class="card-text"><small class="text-muted" style="font-size: 14px">@relativityspace</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-2">
                            <img src="virgin-1.svg" class="img-fluid wd-follow-logo" height="36px" width="36px" alt="...">
                        </div>
                        <div class="col-md-10">
                            <div class="card-body override-bs">
                                <button class="btn btn-primary wd-follow-button fa-pull-right">
                                    Follow
                                </button>
                                <h7 class="card-title" style="font-size: 15px;" ><b>Virgin Glactic</b> <span class="fa-stack fa-1x" style="font-size: 6px">
                                    <i class="fas fa-solid fa-stack-2x fa-circle"></i>
                                    <i class="fas fa-solid fa-stack-1x fa-check" style="color: white"></i>
                                </span></h7>
                                <p class="card-text"><small class="text-muted" style="font-size: 14px">@virgingalactic</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-2">
                            <img src="nasa.png" class="img-fluid wd-follow-logo" height="36px" width="36px" alt="...">
                        </div>
                        <div class="col-md-10">
                            <div class="card-body override-bs">
                                <button class="btn btn-primary wd-follow-button fa-pull-right">
                                    Follow
                                </button>
                                <h7 class="card-title" style="font-size: 15px;" ><b>NASA</b> <span class="fa-stack fa-1x" style="font-size: 6px">
                                    <i class="fas fa-solid fa-stack-2x fa-circle"></i>
                                    <i class="fas fa-solid fa-stack-1x fa-check" style="color: white"></i>
                                </span></h7>
                                <p class="card-text"><small class="text-muted" style="font-size: 14px">@NASA</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-2">
                            <img src="tesla.png" class="img-fluid wd-follow-logo" height="36px" width="36px" alt="...">
                        </div>
                        <div class="col-md-10">
                            <div class="card-body override-bs">
                                <button class="btn btn-primary wd-follow-button fa-pull-right">
                                    Follow
                                </button>
                                <h7 class="card-title" style="font-size: 15px;" ><b>Tesla</b> <span class="fa-stack fa-1x" style="font-size: 6px">
                                    <i class="fas fa-solid fa-stack-2x fa-circle"></i>
                                    <i class="fas fa-solid fa-stack-1x fa-check" style="color: white"></i>
                                </span></h7>
                                <p class="card-text"><small class="text-muted" style="font-size: 14px">@Tesla</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</div>

    `);
}

$(exploreCompoent);
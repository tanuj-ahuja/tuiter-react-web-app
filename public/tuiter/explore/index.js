import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";

function exploreCompoent() {
    $('#wd-explore').append(`
        <div class="container wd-flex-container pt-2">
<div class="row container-global">
    <div class="col-xxl-3 col-xl-2 col-lg-1 col-md-2 col-sm-2">
        ${NavigationSidebar()}
    </div>

    <div class="col-xxl-6 col-xl-7 col-lg-7 col-md-10 col-sm-10">
        ${ExploreComponent()}
    </div>


    <div class="col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block">
        <div class="wd-sidebar">
                ${WhoToFollowList()}
        </div>
    </div>

</div>
</div>

    `);
}

$(exploreCompoent);
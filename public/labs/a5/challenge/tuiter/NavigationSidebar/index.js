const NavigationSidebar = () => {
    return(`
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
`);
}

export default NavigationSidebar;
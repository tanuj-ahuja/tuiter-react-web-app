const WhoToFollowListItem = (who) => {
    return(`
            <div class="card" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-2">
                    <img src=${who.avatarIcon} class="img-fluid wd-follow-logo" height="36px" width="36px" alt="...">
                </div>
                <div class="col-md-10">
                    <div class="card-body override-bs">
                        <button class="btn btn-primary wd-follow-button fa-pull-right">
                            Follow
                        </button>
                        <h7 class="card-title text-white" style="font-size: 15px;" ><b>${who.userName}</b> <span class="fa-stack fa-1x" style="font-size: 6px">
                            <i class="fas fa-solid fa-stack-2x fa-circle"></i>
                            <i class="fas fa-solid fa-stack-1x fa-check" style="color: white"></i>
                        </span></h7>
                        <p class="card-text"><small class="text-white" style="font-size: 14px">${who.handle}</small></p>
                    </div>
                </div>
            </div>
        </div>
    `);
}

export default WhoToFollowListItem;
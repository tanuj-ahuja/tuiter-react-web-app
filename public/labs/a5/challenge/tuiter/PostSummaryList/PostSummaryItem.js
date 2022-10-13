
const PostSummaryItem = (post) => {
    return(`        
        <div class="card" style="max-width: 100%;">
            <div class="row g-0">

                <div class="col-9">
                    <div class="card-body override-bs">
                        <p class="card-text" style="margin: 0px"><small class="text-muted" style="font-size: 14px">${post.topic}</small></p>
                        <b class="card-title text-white" style="font-size: 15px;" >${post.userName} <span class="fa-stack fa-1x" style="font-size: 6px">
                                    <i class="fas fa-solid fa-stack-2x fa-circle"></i>
                            <i class="fas fa-solid fa-stack-1x fa-check" style="color: white"></i></span></b>
                                 - <small class="text-muted">${post.time}</small>
                        <div></div><strong class = "text-white" style="font-size: 14px;">${post.title}</strong></div>

                    </div>
                <div class="col-3">
                    <img src=${post.image} class="img-fluid  fa-pull-right pt-2 pb-1 ps-1 pe-1" height="100px" width="100px" alt="...">
                </div>
            </div>
        </div>`);
}

export default PostSummaryItem;


const PostItem = (
    {
        post
    }) => {
    return(
        <div className="row wd-border-bottom-grey pt-2">
            <div className="col-1">
                <img src="../../images/logo512.png" height="40px" width="40px" className="rounded-circle"/>
            </div>
            <div className="col-11">
             <b className="text-white">{post.user} </b> <span className="text-muted" style={{"fontSize": "14px"}}> <span className="fa-stack fa-1x" style={{"fontSize": "6px"}}>
                                    <i className="fas fa-solid fa-stack-2x fa-circle" style={{"color": "white"}}></i>
                            <i className="fas fa-solid fa-stack-1x fa-check" style={{"color": "black"}}></i></span> {post.handle} · {post.time}</span>
            <p>{post.tweet}</p>
            <div className="row rounded wd-border-color-grey me-2">
            <img className="wd-image wd-border-bottom-grey pb-2" src="../../images/logo512.png" width="100%" height="264px"/>

            <span className="text-white">{post.title}</span>
            <span>{post.content}</span>
            </div>
            <div className="row pt-2 pb-2">

            <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><i className="fa fa-comment"></i> <span className="number">{post.comments}</span></a></div>
            <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><i className="fa fa-retweet"></i> <span className="number">{post.retweets}</span></a></div>
            <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><i className="fa fa-heart"></i> <span className="number">{post.likes}</span></a></div>
            <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><i className="fa fa-upload"></i> <span className="number"></span></a></div>

            </div>
            </div>
        </div>
    );
}

export default PostItem;
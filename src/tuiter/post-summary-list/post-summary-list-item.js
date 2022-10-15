
const PostSummaryItem = (
    {
        post = {
            topic: 'Web Development',
            userName: 'ReactJS',
            time: '2h',
            title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
            image: '../../images/react.png'
        }
    }
) => {
    return(
        <div className="card" style={{"maxWidth": 100+"%"}}>
            <div className="row g-0">

                <div className="col-10">
                    <div className="card-body override-bs">
                        <p className="card-text" style={{"margin": "0px"}}><small className="text-muted" style={{"fontSize": "14px"}}>{post.userName} - <small className="text-muted">{post.time}</small></small></p>
                        <b className="card-title" style={{"fontSize": "15px"}} >{post.topic}</b>
                        <div></div><span style={{"fontSize": "14px"}}>{post.title}</span></div>

                    </div>
                <div className="col-2 pe-2">
                    <img src={post.image} className="float-right img-fluid rounded-2 mt-2 mb-1 ms-1 me-2" height="90px" width="90px"/>
                </div>
            </div>
        </div>
)
};

export default PostSummaryItem;
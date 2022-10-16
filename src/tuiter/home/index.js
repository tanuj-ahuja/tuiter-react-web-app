import postsArray from './posts.json'
import PostItem from "../post-item";

const Home = () => {
    return (
        <div className="list-group">
            {
                postsArray.map(item => <PostItem post={item}/>)
            }
        </div>
    )
}

export default Home;
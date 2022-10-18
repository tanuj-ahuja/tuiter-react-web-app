import postsArray from './posts.json'
import PostItem from "../post-item";

const Home = () => {
    return (
        <div className="list-group">
            {
                postsArray.map(item => <PostItem key={item.user}  post={item}/>)
            }
        </div>
    )
}

export default Home;
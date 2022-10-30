import postsArray from './posts.json'
import PostItem from "../post-item";
import WhatsHappening from "./whats-happening"
import TuitList from "../tuits/tuits-list/index"

const Home = () => {
    return (
        <>
        <WhatsHappening/>
        <TuitList></TuitList>
        </>
    )
}

export default Home;
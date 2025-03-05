 
import Card from "../../components/Card/Card";
import './Home.css'; 
import useFetch from "../../Utils/useFetch";
import { Link } from "react-router-dom";
const Home = () => {
    const {data:blogs, loading, error} = useFetch('http://localhost:8000/blogs');

    return (  
        <section className="home">
            <h1>All Blogs</h1>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            <div className="blog-list">  
                {blogs && blogs.map(blog=> <Link to={`/blogs/${blog.id}`} key={blog.id}><Card blog={blog} /></Link>)} 
            </div> 
        </section>
    );
}
 
export default Home;
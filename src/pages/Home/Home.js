 
import Card from "../../components/Card/Card";
import './Home.css'; 
import useFetch from "../../Utils/useFetch";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
const Home = () => {
    const {data:blogs, loading, error} = useFetch('http://localhost:8000/blogs');
    if(loading)
    return (
        <section style={{justifyContent:'center',gap:10}}>
            <BounceLoader
            color="orange"
            cssOverride={{}}
            loading
            size={60}
            />
            <p>Loading...</p> 
        </section>
    )

    return (  
        <section className="home">
            <h1>All Blogs</h1>
            {error && <p>{error}</p>}
            
            <div className="blog-list">  
                {blogs && blogs.map(blog=> <Link to={`/blogs/${blog.id}`} key={blog.id}><Card blog={blog} /></Link>)} 
            </div> 
        </section>
    );
}
 
export default Home;
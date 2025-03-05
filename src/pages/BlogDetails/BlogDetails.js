import { useParams } from 'react-router-dom';
import './BlogDetails.css';
import useFetch from '../../Utils/useFetch';
const BlogDetails = () => {
    
    const {id} = useParams()
    const {data:blog, loading, error} = useFetch('http://localhost:8000/blogs/'+ id);
    return ( 
        
        <section className="blog-details">
            {loading && <p>Loading Blog</p>}
            {error && <p>{error}</p>}
            {blog && <div>
                <h1>{blog.title}</h1>
                <p className="blog-details-author">Author: {blog.author? String(blog.author):"Unknown"}</p>
                <p className="blog-details-body">
                    {blog.body}
                </p>
            </div>} 
        </section>
     );
}
 
export default BlogDetails;
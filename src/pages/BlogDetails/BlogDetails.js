import { useParams } from 'react-router-dom';
import './BlogDetails.css';
import useFetch from '../../Utils/useFetch';
import { BounceLoader } from "react-spinners";
const BlogDetails = () => {
    
    const {id} = useParams()
    const {data:blog, loading, error} = useFetch('http://localhost:8000/blogs/'+ id);

    if(loading)
        return (
            <section style={{justifyContent:'center',gap:10}}>
                <BounceLoader
                color="orange"
                cssOverride={{}}
                loading
                size={60}
                />
                <p>Loading Blog...</p> 
            </section>
        )

        
    return ( 
        
        <section className="blog-details"> 
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
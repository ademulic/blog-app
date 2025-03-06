import { useNavigate, useParams } from 'react-router-dom';
import './BlogDetails.css';
import useFetch from '../../Utils/useFetch';
import { BounceLoader } from "react-spinners";
import { useState } from 'react';
const BlogDetails = () => {
    
    const {id} = useParams()
    const {data:blog, loading, error} = useFetch('http://localhost:8000/blogs/'+ id);
    const navigate = useNavigate();
    const [isLoading,setIsLoading]= useState(false);
    const handleDelete = ()=>{
        setTimeout(()=>{
            fetch(`http://localhost:8000/blogs/${id}`,{method:"DELETE"})
            .then(()=>{
                setIsLoading(true);
                navigate('/');
            })
        },1000)
        
    }

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
            {blog && 
            <article>
                <h1>{blog.title}</h1>
                <p className="blog-details-author">Author: {blog.author? String(blog.author):"Unknown"}</p>
                <p className="blog-details-body">
                    {blog.body}
                </p>
            </article>} 
            {!isLoading ? 
                <button className='delete-btn' onClick={handleDelete}>Delete this blog</button> :
                <span>
                    <BounceLoader
                    color="orange"
                    cssOverride={{}}
                    loading
                    size={60}
                    />
                    <p>Deleting Blog...</p> 
                </span>
            }
        </section>
     );
}
 
export default BlogDetails;
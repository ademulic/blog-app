import './Card.css';

const Card = ({blog}) => {  
    return (  
        <div className="card">
            <img src={blog.thumbnail} alt="something" />
            <div className="card-body">
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author ? String(blog.author) : 'Unknown'}</p> 
                
            </div> 
        </div> 
    );
}
 
export default Card;
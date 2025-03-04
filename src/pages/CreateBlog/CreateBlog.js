import './CreateBlog.css';

const CreateBlog = () => {
    return ( 
        <section className="create-blog">
            <form>
                <h2>Create a new Blog</h2> 
                <div>
                    <label htmlFor="blog-title"><p>Title:</p></label>
                    <input id="blog-title" type="text" placeholder="Enter Blog title..." /> 
                </div>
                 
                <label htmlFor="blog-body"><p></p>Body</label>
                <textarea id="blog-body" placeholder='Enter blog body...'></textarea>
                
                <button>Submit</button>
            </form>            
            
        </section>
     );
}
 
export default CreateBlog;
import { useEffect,useState } from 'react';
import './CreateBlog.css'; 
import { BounceLoader } from "react-spinners";
import { useNavigate } from 'react-router-dom';
const CreateBlog = () => {
    const [users, setUsers] = useState(null);
    const [title, setTitle] = useState(''); 
    const [thumbnail, setThumbnail] = useState('');
    const [author, setAuthor] = useState('Ryu');
    const [body,setBody] = useState('');
    const [loading, setLoading]= useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://localhost:8000/users')
        .then(res=>{
            if(!res.ok){
                throw Error("there was a problem with the users database, sorry :(")
            }else
            {
                return res.json()
            }
        })
        .then(data=>setUsers(data)).catch((err)=>{console.log(err.message)});
    },[]);


    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,thumbnail,author,body};
        setLoading(true);
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs', {
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(blog)
            }).then(()=>{
                navigate('/'); 
                setLoading(false);
            })
        },1000)
        
    }


    return ( 
        <section className="create-blog">

            {/* <p>{title}</p>
            <p>{imgUrl}</p>
            <p>{body}</p>
            <p>{author}</p> */}
            <form onSubmit={handleSubmit}>
                <h2>Create a new Blog</h2> 
                <p style={{textAlign:'center'}}>Please fill out the form below</p>
                <div>
                    <label htmlFor="blog-title"><p>Title:</p></label>
                    <input 
                        id="blog-title" 
                        type="text" 
                        placeholder="Enter Blog title..." 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}
                    /> 
                </div>
                <div>
                    <label htmlFor="img-url"><p>Image URl:</p></label>
                    <input 
                        id="img-url" 
                        type="text" 
                        placeholder="Paste or type an image url from the internet..." 
                        value={thumbnail}
                        onChange={(e)=>setThumbnail(e.target.value)}
                    /> 
                </div>
                <select 
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}>
                    {
                        users && users.map((user)=>
                            <option value={user.name} key={user.id} >{user.name}</option>
                        )
                    }
                </select>
                <label htmlFor="blog-body"><p></p>Body</label>
                <textarea 
                    id="blog-body" 
                    placeholder='Enter blog body...' 
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                
                {!loading ? <button type='submit'>Submit</button>:''}
                {loading &&  
                    <span>
                        <BounceLoader
                        color="orange"
                        cssOverride={{}}
                        loading
                        size={60}
                        /><p>Adding Blog...</p>
                    </span>
                }
            </form>            
            

        </section>
     );
}
 
export default CreateBlog;
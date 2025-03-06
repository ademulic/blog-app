import { useState } from 'react';
import './CreateUser.css';
import { useNavigate } from 'react-router-dom';
import { BounceLoader } from "react-spinners";

const CreateUser = () => {

    const [name,setName] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const navigate =  useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newUser = {name}
        setIsLoading(true);
        setTimeout(()=>{
            fetch('http://localhost:8000/users',{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(newUser)
            }).then(()=>{
                navigate('/');
                setIsLoading(false)
            })
        },1000)
        
    }
    

    return ( 
        <section className="create-user">
            <form onSubmit={handleSubmit}>
                <h2>Create a user</h2>
                <p>Please fill out the form</p>
                <div>
                    <label htmlFor="full-name"><p>Full Name</p></label>
                    <input type="text" id="full-name" value={name} onChange={(e)=>setName(e.target.value)} required />
                </div>
                {!isLoading ? <button type="submit">Sign Up</button> : 
                <span>
                    <BounceLoader
                    color="orange"
                    cssOverride={{}}
                    loading
                    size={60}
                    /><p>Adding User...</p>
                </span>}
            </form>
        </section>
     );
}
 
export default CreateUser;
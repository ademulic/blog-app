import { Link } from 'react-router-dom';
import { FaRegSadCry } from "react-icons/fa";
import './NotFound.css';
const NotFound = () => {
    return ( 
        <section className='not-found-section'>
            <span><FaRegSadCry /></span>
            <h1>404 not found</h1>
            <p>The Page you are looking for doesn't exist</p>
            <Link to="/">Back to home</Link>
        </section>
     );
}
 
export default NotFound;
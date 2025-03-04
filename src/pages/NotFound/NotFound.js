import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return ( 
        <section className='not-found-section'>
            <h1>404 not found</h1>
            <Link to="/">Back to home</Link>
        </section>
     );
}
 
export default NotFound;
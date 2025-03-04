import { Link } from "react-router-dom";
import './Footer.css';
const Footer = () => {
    return ( 
        <footer>
            <p><Link to="/">Blog.app</Link> created by <a href="https://www.linkedin.com/in/adem-mulic-289864253/"> Adem Mulic</a></p>
        </footer>
     );
}
 
export default Footer;
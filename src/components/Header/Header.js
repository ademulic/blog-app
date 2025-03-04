import './Header.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const closeNav = () => setIsNavOpen(false);

   

    return (
        <header>
            <button className="burger-menu" onClick={toggleNav} aria-label="Open Menu">
                <RxHamburgerMenu />
            </button>

            <h1 className="logo">TheBlog.com</h1>

            {/* Use dynamic class to control open/close state */}
            <nav className={isNavOpen ? "nav-open" : ""}>
                <button className="close-menu" onClick={closeNav} aria-label="Close Menu">
                    <IoMdClose />
                </button>

                <div className="nav-links">
                    <NavLink to="/" onClick={closeNav}>Home</NavLink>
                    <NavLink to="/create" onClick={closeNav}>New Blog</NavLink>
                </div>

                <div className="empty-div"></div>
            </nav>
            <div className="empty-div"></div>
        </header>
    );
};

export default Header;

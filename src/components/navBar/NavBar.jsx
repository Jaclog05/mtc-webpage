import React from "react";
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className={styles.navBar}>
                <h2>MTC LOGO</h2>
                <div className={styles.right}>
                        <Link to="/" className={styles.links}>Home</Link>
                        <Link to="/about" className={styles.links}>About Us</Link>
                        <Link to="/band" className={styles.links}>Band</Link>
                        <Link to="/services" className={styles.links}>Our services</Link>
                </div>
      </nav>
    )
}

export default NavBar
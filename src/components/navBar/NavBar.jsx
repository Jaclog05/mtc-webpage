import React from "react";
import styles from "./NavBar.module.css"
import logo from "../../images/MTC-logo.jpg"
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className={styles.navBar}>
                <Link to='/' className={styles.linkLogo}>
                    <div className={styles.left}>
                        <img src={logo} alt="mtc-logo" />
                        <h5>MINISTERIOS TOTALMENTE CONSAGRADOS</h5>
                    </div>
                </Link>
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
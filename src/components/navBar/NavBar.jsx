import React, { useState } from "react";
import styles from "./NavBar.module.css"
import logo from "../../images/MTC-logo.jpg"
import { Link } from "react-router-dom";

const NavBar = () => {
    const [selected, setSelected] = useState("home")

    const handleClick = (e) => {
        let {id} = e.target
        setSelected(id)
    }

    return(
        <nav className={styles.navBar}>
                <Link to='/' className={styles.linkLogo}>
                    <div className={styles.left}>
                        <img src={logo} alt="mtc-logo" />
                        <h5>MINISTERIOS TOTALMENTE CONSAGRADOS</h5>
                    </div>
                </Link>
                <div className={styles.right}>
                        <Link to="/" className={selected !== 'home' ? styles.links : styles.selected} id="home" onClick={handleClick}>Home</Link>
                        <Link to="/about" className={selected !== 'about' ? styles.links : styles.selected} id="about" onClick={handleClick}>About Us</Link>
                        <Link to="/band" className={selected !== 'band' ? styles.links : styles.selected} id="band" onClick={handleClick}>Band</Link>
                        <Link to="/services" className={selected !== 'services' ? styles.links : styles.selected} id="services" onClick={handleClick}>Our services</Link>
                </div>
      </nav>
    )
}

export default NavBar
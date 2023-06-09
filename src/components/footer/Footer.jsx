import React from "react";
import styles from './Footer.module.css'
import logo from '../../images/MTC-logo.jpg'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.upper}>
                <div>
                    <img src={logo} alt="MTC-logo" />
                </div>
                <div className={styles.socialMedia}>
                    <h4>SOCIAL MEDIA</h4>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/iglesiamtc">
                        <h6><i className="bi bi-facebook"></i>Iglesia Mtc</h6>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mtciglesia/">
                        <h6><i className="bi bi-instagram"></i>mtciglesia</h6>
                    </a>
                    <a target= "blank" rel="noreferrer" href="https://www.youtube.com/@iglesiamtc6031">
                        <h6><i className="bi bi-youtube"></i>IGLESIA MTC</h6>
                    </a>
                </div>
                <form className={styles.form}>
                    <h4>GET IN CONTACT</h4>
                    <input placeholder="E-mail"/>
                    <input placeholder="Message"/>
                    <button>Send</button>
                </form>
            </div>
            <div className={styles.bottom}>
                <h6>Copyright &copy; MTC Church, 2023</h6>
            </div>
        </footer>
    )
}

export default Footer
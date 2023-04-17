import React, { useState } from "react";
import styles from './About.module.css';
import Pastors from "../../components/pastors/Pastors";
import Vision from "../../components/vision/Vision";
import Belief from "../../components/belief/Belief";
import Values from "../../components/values/Values";

const About = () => {

    const [section, setSection] = useState("pastors")
    const handleClick = (e) => {
        const { id } = e.target
        setSection(id)
    }

    return(
        <main className={styles.main}>
            <div className={styles.coverWrapper}>
                <h1>About Our Ministries</h1>
            </div>
            <div className={styles.aboutInfoWrapper}>
               <div>
                    <h5 onClick={handleClick} id="pastors">Our Pastors</h5>
                    <h5 onClick={handleClick} id="vision">Our Vision</h5>
                    <h5 onClick={handleClick} id="belief">Our Belief</h5>
                    <h5 onClick={handleClick} id="values">Values</h5>
                </div>
                {
                    (() => {
                        switch (section) {
                        case 'vision':
                            return <Vision />;
                        case 'belief':
                            return <Belief />;
                        case 'values':
                            return <Values />;
                        default:
                            return <Pastors />;
                        }
                    })()
                }
            </div>
        </main>
    )
}

export default About
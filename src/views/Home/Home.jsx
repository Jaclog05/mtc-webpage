import React from "react";
import styles from './Home.module.css';

const Home = () => {
    return(
        <main className={styles.main}>
            <div className={styles.coverWrapper}>
                <h1>Ministerios Totalmente Consagrados</h1>
                <h2>Welcome Church</h2>
            </div>
            <div className={styles.intro}>
                <h2>
                    MTC is a church that believes in Jesus, 
                    a church that loves God and people.
                </h2>
                <p>
                    Overwhelmed by the gift of salvation we have found
                    in Jesus, we have a heart for authentic worship,
                    are passionate about the local church,
                    and are on mission to see God’s kingdom established
                    across the earth.
                </p>
            </div>
            <div className={styles.location}>
                <h2>Where are we located?</h2>
                <div className={styles.imageDiv}>
                    <div>
                        <h3>Carrera 25 # 61-08</h3>
                        <h3>Los Andes, </h3>
                        <h4>Barranquilla - Colombia</h4>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
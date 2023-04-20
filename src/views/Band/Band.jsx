import React from "react";
import styles from'./Band.module.css'
import picture from '../../images/mtc-home-picture.png'
import videoBg from '../../images/fyo-band-bg.mp4'

const Band = () => {
    return(
        <main className={styles.main}>
            <div className={styles.coverWrapper}>
                <video src={videoBg} autoPlay loop muted/>
                <h1>For Youth Only</h1>
                <h2>Music</h2>
            </div>
            <div className={styles.intro}>
                <img src={picture} alt="mtc-home" />
                <div>
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
            </div>
            <div className={styles.location}>
                <h2>Where are we located?  <i className="bi bi-geo-alt-fill"></i></h2>
                <div className={styles.imageDiv}>
                    <div>
                        <h3>Carrera 25 # 61-08</h3>
                        <h4>Los Andes, </h4>
                        <h4>Barranquilla - Colombia</h4>
                        <i className="bi bi-globe-americas"></i>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Band
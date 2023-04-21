import React from "react";
import styles from'./Band.module.css'
import deezerLogo from '../../images/deezer-logo.png'
import videoBg from '../../images/fyo-band-bg.mp4'
import albumImage from '../../images/last-album.png'

const Band = () => {
    return(
        <main className={styles.main}>
            <div className={styles.coverWrapper}>
                <video src={videoBg} autoPlay loop muted/>
                <h1>For Youth Only</h1>
                <h2>Music</h2>
            </div>
            <div className={styles.intro}>
            <div className={styles.socialMedia}>
                    <h5>LISTEN TO OUR MUSIC ON</h5>
                    <div>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCtnTZrsvxDVN-yj8tNDKFeg">
                            <i className="bi bi-youtube"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/2Ap2ov7Yggc0tKp3k6fkSt">
                            <i className="bi bi-spotify"></i>
                        </a>
                        <a target= "blank" rel="noreferrer" href="https://music.apple.com/co/artist/for-youth-only/1533556211">
                            <i className="bi bi-apple"></i>
                        </a>
                        <a target= "blank" rel="noreferrer" href="https://www.deezer.com/es/artist/108444942">
                            <img src={deezerLogo} alt="deezer-logo"/>
                        </a>
                    </div>
                </div>
                <div>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit, laudantium, ea asperiores, similique illum saepe est commodi quod numquam minus. Fugit, optio labore earum dolor a itaque dolore architecto!
                    </p>
                </div>
            </div>
            <div className={styles.location}>
                <img src={albumImage} alt="last-single" />
                <div>
                    <h1>VIVES EN MI</h1>
                    <h2>Available Now!</h2>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=VY2gLhxYSh4">
                            <h5>Listen on Youtube</h5>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Band
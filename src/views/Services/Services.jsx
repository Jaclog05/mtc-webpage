import React from "react";
import styles from'./Services.module.css'
import coverImg from '../../images/services-cover-image.png'

const Services = () => {
    return(
        <main className={styles.main}>
            <div className={styles.coverWrapper}>
                <img className={styles.coverImg} src={coverImg} alt="cover"/>
                <h1>Familiar Service</h1>
                <h2>Sundays 10:00</h2>
            </div>
            <div className={styles.intro}>
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
                <div>
                    <h1>Devotionals Section</h1>
                </div>
            </div>
        </main>
    )
}

export default Services
import React from "react";
import styles from './Pastors.module.css'
import picture from '../../images/mtc-home-picture.png'

const Pastors = () => {
    return (
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
    )
}

export default Pastors;
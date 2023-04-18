import React from "react";
import styles from './Vision.module.css'
import picture_One from '../../images/MTC-logo.jpg'

const Vision = () => {
    return (
        <div className={styles.intro}> 
            <img src={picture_One} alt="mtc-home" />
                <div>
                        <h2>
                            MTC VISION
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Modi dolorem sint earum voluptatum harum et, 
                            porro numquam recusandae laboriosam tenetur
                            cumque ex doloremque ullam voluptatibus maxime
                            culpa tempora sequi deleniti
                        </p>
                </div>
        </div>
    )
}

export default Vision;
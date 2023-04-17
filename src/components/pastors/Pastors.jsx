import React from "react";
import styles from './Pastors.module.css'
import picture_One from '../../images/Pastor_Rommie.png'
import picture_Two from '../../images/Pastor_Leonardo.png'
import picture_Three from '../../images/Pastora_Luz.png'


const Pastors = () => {
    return (
        <div className={styles.pastorsWrapper}> 
            <div className={styles.intro}>
                <img src={picture_One} alt="mtc-home" />
                <div>
                        <h2>
                            Rommie Lee Smith Sr.
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
            <div className={styles.intro}>
                <div>
                        <h2>
                            Leonardo Fontalvo
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Modi dolorem sint earum voluptatum harum et, 
                            porro numquam recusandae laboriosam tenetur
                            cumque ex doloremque ullam voluptatibus maxime
                            culpa tempora sequi deleniti
                        </p>
                </div>
                <img src={picture_Two} alt="mtc-home" />
            </div>
            <div className={styles.intro}>
                <img src={picture_Three} alt="mtc-home" />
                <div>
                        <h2>
                            Luz Alcira Ariza
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
        </div>
    )
}

export default Pastors;
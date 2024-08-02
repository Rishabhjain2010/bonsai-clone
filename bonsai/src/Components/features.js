import React from "react";
import styles from '../styles/features.module.scss' ;

const features = ({title , description , buttonText , imgSrc , imgAlt }) => {
return (
<div className={styles.features}>
    <div className={styles.text}>
        <h2> {title} </h2>
        <p> {description} </p>
        <button className={styles.buttonText}> 
            {buttonText}          
        </button> 
    </div>
    <div className={styles.image}>
        <img src={imgSrc} alt={imgAlt} />
    </div>
</div>
);

};

export default features;
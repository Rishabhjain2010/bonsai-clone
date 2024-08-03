import React from 'react';
import styles from '../styles/features.module.scss' ;


const features = () => {
return (
<section className={styles.section} >

        <div className={styles.main}>
            <div className={styles.feature}>
                <div className={styles.text}>
                    <h2> Deliver projects on-time & on-budget </h2>
                        <div className={styles.flexp}  >
                            <p> ✓ Monitor key agency KPIs in real time. </p>
                            <p> ✓ Monitor key agency KPIs in real time. </p>
                            <p> ✓ Plan ahead for future growth. </p>
                        </div>
                    <div className={styles.button}>
                    <a href="" className='utton'>Get Started</a>
                    </div>
                </div>
                <div className={styles.imageend}>
                    <img src="/assets/consultingpartner.png"alt= "https://cdn.prod.website-files.com/637e5892fb4b6db88a62cc0a/6666d70e419ec905de6e73f2_PMs-Projects%20(5)%20(1)-p-800.png"/>
                </div>
            </div>
        </div>



        <div className={styles.main}>
            <div className={styles.features}>
                <div className={styles.image}>
                    <img src="/assets/profitability.png"alt= "https://cdn.prod.website-files.com/637e5892fb4b6db88a62cc0a/66aa4d9004841d5719a54841_Profitability%20Forecast-p-800.png"/>
                </div>
                <div className={styles.text}>
                    <h2> Deliver projects on-time & on-budget </h2>
                    <p> ✓ Monitor key agency KPIs in real time. </p>
                    <p> ✓ Monitor key agency KPIs in real time. </p>
                    <p> ✓ Plan ahead for future growth. </p>
                    <div className={styles.button}>
                    <a href="" className='button'>Get Started</a>
                    </div>
                </div>
            </div>
        </div>


        <div className={styles.main}>
            <div className={styles.features}>
                <div className={styles.text}>
                    <h2> Deliver projects on-time & on-budget </h2>
                    <p> ✓ Monitor key agency KPIs in real time. </p>
                    <p> ✓ Monitor key agency KPIs in real time. </p>
                    <p> ✓ Plan ahead for future growth. </p>
                    <div className={styles.button}>
                    <a href="" className='button'>Get Started</a>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src="/assets/projectpipeline.png"alt= "https://cdn.prod.website-files.com/637e5892fb4b6db88a62cc0a/6666d70e419ec905de6e73f2_PMs-Projects%20(5)%20(1)-p-800.png"/>
                </div>
            </div>
        </div>


</section>
);

};

export default features;
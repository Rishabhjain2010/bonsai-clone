import React from "react";
import styles from "../styles/getstarted.module.scss"


const Getstarted = () => {
return (
<section className={styles.section}>
    <div className={styles.container}>
    <h1>Get started in 30 seconds.</h1>
    <h1>Free for 7 days.</h1>
    <p>Simplify your business operations and consolidate your projects, clients and team into one integrated, easy-to-use platform.</p>
    <div className={styles.buttons}>
    <button className={styles.greenbutton}>Get Started</button> 
    <button className={styles.border}>Book a demo</button>
    </div>
    </div>


</section>

);

}

export default Getstarted ;
import React from "react";
import styles from "../styles/signup.module.scss"

const Signup = () => {

return (
<section className={styles.section} >
    <div className={styles.container}>
        <div className={styles.arrow}>
            <img src="/assets/Arrow.svg" alt="" height="31px" width="31px" />
        </div>
        <div className={styles.signup}>     
            <h2> Signup to access aditional templates.</h2>
            <p> Addition templates are only avaialble within Bonsai.</p>
            <button className={styles.button} >Signup</button>
        </div>
    </div>
    
</section >


);


}

export default Signup ;
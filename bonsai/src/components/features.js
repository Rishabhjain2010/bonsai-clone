import React from "react";
import styles from "../styles/features.module.scss";

const features = () => {
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <div className={styles.feature}>
          <div className={styles.imageend}>
            <img
              src="/assets/consultingpartner.png"
              alt="https://cdn.prod.website-files.com/637e5892fb4b6db88a62cc0a/6666d70e419ec905de6e73f2_PMs-Projects%20(5)%20(1)-p-800.png"
            />
          </div>
          <div className={styles.text}>
            <h2> Deliver projects on-time & on-budget </h2>
            <div className={styles.flexp}>
              <p> ✓ Assign, prioritize & track tasks. </p>
              <p> ✓ Track your budget across projects. </p>
              <p> ✓ Log your team's time in-app or in timesheets. </p>
            </div>

            <div className={styles.button}>
              <button className={styles.button}>Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.feature}>
          <div className={styles.text}>
            <h2> Track revenue & boost profitability </h2>
            <div className={styles.flexp}>
              <p> ✓ Monitor key agency KPIs in real time.</p>
              <p> ✓ Optimize performance & increase margins. </p>
              <p> ✓ Plan ahead for future growth. </p>
            </div>
            <div className={styles.button}>
              <button className={styles.button}>Get Started</button>
            </div>
          </div>
          <div className={styles.imagestart}>
            <img
              src="/assets/projectpipeline.png"
              alt="https://cdn.prod.website-files.com/637e5892fb4b6db88a62cc0a/6666d70e419ec905de6e73f2_PMs-Projects%20(5)%20(1)-p-800.png"
            />
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.feature}>
          <div className={styles.imageend}>
            <img
              src="/assets/projectpipeline.png"
              alt="https://cdn.prod.website-files.com/637e5892fb4b6db88a62cc0a/6666d70e419ec905de6e73f2_PMs-Projects%20(5)%20(1)-p-800.png"
            />
          </div>
          <div className={styles.text}>
            <h2> Manage clients & get paid </h2>
            <div className={styles.flexp}>
              <p> ✓ Centralize client info in your CRM. </p>
              <p> ✓ Send invoices & get paid. </p>
              <p> ✓ Automate all npyour workflows. </p>
            </div>
            <div className={styles.button}>
              <button className={styles.button}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default features;

import React from 'react';
import styles from '../styles/ratings.module.scss';

const Rating = () => {
  return (
    <div className={styles.ratingcontainer}>
      <div className={styles.ratingheader}>
        Trusted by thousands of agencies and consulting firms
      </div>
      <div className={styles.ratingbody}>
        <div className={styles.ratingitem}>
          <div className={styles.stars}>
            {Array(5).fill().map((_, i) => (
              <span key={i} className={styles.star}>&#9733;</span>
            ))}
          </div>
          <div className={styles.ratingdiv}>
            <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/6656028b3c042e2df5f9404f_capterra.webp" height="20px" />
            <div className={styles.ratingtext}>4.8/5 on Capterra</div>
          </div>
        </div>
        <div className={styles.ratingitem}>
          <div className={styles.stars}>
            {Array(5).fill().map((_, i) => (
              <span key={i} className={styles.star}>&#9733;</span>
            ))}
          </div>
          <div className={styles.ratingdiv}>
            <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/665604182d3e9978690a021d_g2.webp" height="20px"/>
            <div className={styles.ratingtext}>4.8/5 on G2</div>
          </div>
        </div>
        <div className={styles.ratingdescription}>
          Successful agencies, consulting and professional services firms rely on Bonsai every day to run their business.
        </div>
      </div>
    </div>
  );
}

export default Rating;

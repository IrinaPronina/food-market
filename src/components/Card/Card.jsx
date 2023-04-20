import React from 'react';
import styles from './card.module.scss';
import { ReactComponent as IconCart } from './../../assets/img/icon-cart.svg';

function Card() {
  return (
    <article className={styles.card}>
      <div className={styles.imgBox}>
        <img
          width={300}
          height={225}
          className={styles.img}
          src="/img/pineapple.jpg"
          alt="Product"
        />
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.name}>Lemon</h3>
        <div className={styles.buy}>
          <div className={styles.price}>
            <p>$5.25</p>
          </div>
          <button className={styles.btn}>
            <IconCart width="16" height="16" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;

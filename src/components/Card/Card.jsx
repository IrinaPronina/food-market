import React from 'react';
import styles from './card.module.scss';
import { ReactComponent as IconCart } from './../../assets/img/icon-cart.svg';

function Card({ name, images, price }) {
  return (
    <article className={styles.card}>
      <div className={styles.imgBox}>
        <img width={300} height={225} className={styles.img} src={images[1].url} alt="Product" />
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.buy}>
          <div className={styles.price}>
            <p>{price.formattedValue}</p>
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

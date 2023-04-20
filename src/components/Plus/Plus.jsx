import React from 'react';
import styles from './plus.module.scss';
import { ReactComponent as IconDel } from './../../assets/img/scooter.svg';

export default function Plus() {
  const titles = ['Free shipping', 'Purchase returns', '24/7 support'];
  // const ps = ['For orders over $50', 'If the goods have been damaged', 'Top Operators'];

  return (
    <section className={styles.plus}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {titles.map((title, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.icon}>
                <IconDel width="50" height="50" />
              </div>
              <div className={styles.text}>
                <h3 className={styles.h3}>{title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import React from 'react';
import styles from './plus.module.scss';

import IconDel from './../../assets/icons/scooter.svg';
import IconReturn from './../../assets/icons/return-box.svg';
import IconSup from './../../assets/icons/sup.svg';

export default function Plus() {
  const pluses = [
    {
      title: 'Free shipping',
      icon: IconDel,
    },
    {
      title: 'Purchase returns',
      icon: IconReturn,
    },
    {
      title: '24/7 support',
      icon: IconSup,
    },
  ];

  const plusesArr = Object.entries(pluses); //object into array

  // const ps = ['For orders over $50', 'If the goods have been damaged', 'Top Operators'];

  return (
    <section className={styles.plus}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {plusesArr.map(([key, value]) => (
            <li key={key} className={styles.item}>
              <div className={styles.icon}>
                <img src={value.icon} width="50" height="50" alt="icon" />
              </div>
              <div className={styles.text}>
                <h3 className={styles.h3}>{value.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

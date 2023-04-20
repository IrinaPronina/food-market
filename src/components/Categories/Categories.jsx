import React from 'react';
import styles from './categories.module.scss';

export default function Categories() {
  const categories = ['All', 'Fruit', 'Vegetables', 'BEVERAGES', 'Grocery'];

  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((categoryName, i) => (
          <li key={i} className={styles.item}>
            <button className={styles.btn}>{categoryName}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

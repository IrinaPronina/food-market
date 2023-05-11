import React from 'react';
import styles from './categories.module.scss';

export default function Categories() {
  const [activeCategoryName, setActiveCategoryName] = React.useState(0);
  const categories = ['All', 'Fruit', 'Vegetables', 'BEVERAGES', 'Grocery'];

  const onChangeCategoryName = (index) => {
    setActiveCategoryName(index);
  };

  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            className={`${styles.item} ${activeCategoryName === i ? styles.active : ''}`}
            onClick={() => onChangeCategoryName(i)}
          >
            <button className={styles.btn}>{categoryName}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

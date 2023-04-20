import React from 'react';
import styles from './products.module.scss';
import Categories from '../Categories/Categories';
import Card from '../Card/Card';

function Products() {
  return (
    <section className={styles.products}>
      <div className="container">
        <h2 className={`${styles.title} h2 `}>Top Products</h2>
        <Categories />
        <div className={styles.list}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          {/* {isLoading
              ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
              : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)} */}
        </div>
      </div>
    </section>
  );
}

export default Products;

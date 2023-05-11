import React from 'react';
import styles from './products.module.scss';
import Categories from '../Categories/Categories';
import Card from '../Card/Card';

function Products({ cards }) {
  const [counter, setCounter] = React.useState(8);

  const loadMore = () => {
    setCounter(counter + 4);
  };

  return (
    <section className={styles.products}>
      <div className="container">
        <h2 className={`${styles.title} h2 `}>Top Products</h2>
        <Categories />
        <div className={styles.list}>
          {cards.length ? (
            cards.map((card, i) => {
              if (i < counter) return <Card key={card.code} {...card} />;
            })
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <button className={`${styles.btn} btn btn--stroke `} onClick={() => loadMore()}>
          Show more
        </button>
      </div>
    </section>
  );
}

export default Products;

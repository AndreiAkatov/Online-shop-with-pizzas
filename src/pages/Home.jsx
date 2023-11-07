import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  const [category, setCategory] = React.useState(0);
  const [sortItem, setSortItem] = React.useState({
    name: 'популярности(по убыванию)',
    parametr: 'rating',
    order: 'desc',
  });

  React.useEffect(() => {
    setIsloading(true);

    const selectedCategory = `${category > 0 ? category : ''}`;
    const selectedParam = `${sortItem.parametr}`;
    const selectedOrder = `${sortItem.order}`;

    fetch(
      `https://6526cf64917d673fd76d097f.mockapi.io/items?category=${selectedCategory}&sortby=${selectedParam}&order=${selectedOrder}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        console.log(arr);
        setItems(arr);
        setIsloading(false);
      });
  }, [category, sortItem]);
  return (
    <>
      <div className="content__top">
        <Categories category={category} onChangeCategory={(category) => setCategory(category)} />
        <Sort sortItem={sortItem} onChangeSortItem={(sortItem) => setSortItem(sortItem)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => {
              return <Skeleton key={index} />;
            })
          : items.map((pizza) => {
              return (
                <PizzaBlock
                  title={pizza.name}
                  price={pizza.price}
                  imageUrl={pizza.imageUrl}
                  sizes={pizza.sizes}
                  types={pizza.types}
                />
              );
            })}
      </div>
    </>
  );
}

export default Home;

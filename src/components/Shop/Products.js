import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS=[{
  id:'p1',
  price:6,
  title:'my first book',
  description:'the first book i wrote',
},
{
  id:'p2',
  price:7,
  title:'my second book',
  description:'the second book i wrote',
},
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product=>(
          <ProductItem
          title={product.title}
          price={product.price}
          description={product.description}
          key={product.id}
          id={product.id}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;

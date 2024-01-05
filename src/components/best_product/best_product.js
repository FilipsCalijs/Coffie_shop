import './best_product.css';
import ProductsListItem from '../product-item-list/product-item-list';

const best_prod = (props) => {
  const products = props.data.map((item, id) => {
    return (
      <ProductsListItem
        data={item}
        key={id}
      />
    );
  });

  return(
    <div className='bg_best_proj'>
      <h2>Our Best</h2>
      <div className='item_content_inner'>
        {products}
      </div>
    </div>
  );
};

export default best_prod;
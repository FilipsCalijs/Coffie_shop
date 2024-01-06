import './product-item-list.css';

const ProductsListItem = (props) => {
    const { title, src, alt, price} = props.data;
    return (
        <div className='conteiner-item'>
            <img src={src} alt={alt} className='item_img' />
                <div className='item_title'>
                     {title}
                </div>
                <div className='item_price'>{price}</div>

            
        </div>
    )

}


export default ProductsListItem
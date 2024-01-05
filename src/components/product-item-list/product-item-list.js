import './product-item-list.css';

const ProductsListItem = (props) => {
    const { title} = props.data;
    return (
        <div className='conteiner-item'>
            <img src="#" alt="img" className='item_img' />
                <div className='item_title'>
                     {title}
                </div>
                <div className='item_price'>14px</div>

            
        </div>
    )

}


export default ProductsListItem
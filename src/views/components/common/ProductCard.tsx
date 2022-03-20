import './ProductCard.scss';

const ProductCard = ({ product, onclick }: { product: IProduct, onclick: (id: string | undefined) => void }) => {
    const { _id, name, image, price } = product;

    return <div className='productCard' onClick={() => onclick(_id)}>
        {/* <img src='https://static-01.daraz.com.bd/p/f3a330406e66e6d8e2489b476691fe26.jpg' alt={name} /> */}
        <img src={'https://res.cloudinary.com/muktadir/' + image} alt={name} />
        <div className='details'>
            <h4 className='title'>{name}</h4>
            <p className='price'>${price}</p>
            <p className='originalPrice'>${price}</p>
        </div>
    </div>;
}
export default ProductCard
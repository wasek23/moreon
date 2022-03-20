import { useNavigate } from 'react-router-dom';
import ProductCard from '../common/ProductCard';

const FeatureProducts = ({ products }: { products: IProduct[] }) => {
    const navigate = useNavigate();

    const onClick = (id: string | undefined): void => {
        navigate(`/product/${id}`)
    }

    return <div className='featureProducts grid col-6 col-t-3 col-m-1'>
        {products.map(product => <ProductCard key={product._id} product={product} onclick={onClick} />)}
    </div>;
}
export default FeatureProducts;
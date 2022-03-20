import ShopCard from '../common/ShopCard';

const FeatureShops = () => {
    return <div className='featureShops grid col-6 col-t-3 col-m-1'>
        {[1, 2, 3, 4, 5, 6].map(product => <ShopCard key={product} />)}
    </div>;
}
export default FeatureShops;
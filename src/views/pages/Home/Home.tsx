import useAPI from 'hooks/useAPI';
import ProductService from 'services/Product.service';
import MSlider from 'views/components/custom/MSlider';
import FeatureProducts from 'views/components/home/FeatureProducts';
import FeatureShops from 'views/components/home/FeatureShops';
import './Home.scss';

const Home = () => {
    const { data: products } = useAPI<IProduct[]>(ProductService.getAllProducts);

    return <>
        <section className='heroSection'>
            <div className='container'>
                <MSlider />
            </div>
        </section>

        <section className='flashSellSection'>
            <div className='container'>
                {products && <FeatureProducts products={products} />}
            </div>
        </section>

        <section className='shopsSection'>
            <div className='container'>
                <FeatureShops />
            </div>
        </section>
    </>
}
export default Home
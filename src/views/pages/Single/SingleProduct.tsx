import useAPI from 'hooks/useAPI';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from 'redux/actions/cartAction';
import ProductService from 'services/Product.service';

import './SingleProduct.scss';

const SingleProduct = () => {
    const { id = '' } = useParams();

    const { data } = useAPI<IProduct>(() => ProductService.getProductDetailsById(id));

    const dispatch = useDispatch();

    // const { name, image, description, price, category, store } = data;


    return <div className='singlePage singleProductPage'>
        <div className='container'>
            <div className='singleProduct grid col-t-2 col-m-1'>
                {/* <img src='https://static-01.daraz.com.bd/p/f3a330406e66e6d8e2489b476691fe26.jpg' alt={name} /> */}
                <img src={'https://res.cloudinary.com/muktadir/' + data?.image} alt={data?.name} />

                <div className='details'>
                    <h2 className='title'>{data?.name}</h2>

                    <h5 className='category'>Category: <a href='/category'>{data?.category}</a></h5>

                    <h5 className='shop'>From: <a href='/shop'>{data?.store}</a></h5>

                    <p className='price'>${data?.price}</p>
                    <p className='originalPrice'>${data?.price}</p>

                    <div className='productActions'>
                        <div className='quantity'>
                            <p>Quantity:</p>

                            <div className='quantityAction'>
                                <button className='disable'>-</button>
                                <span className='counter'>1</span>
                                <button>+</button>
                            </div>
                        </div>

                        <div className='interestAction'>
                            <button>Buy Now</button>
                            <button onClick={() => dispatch(addToCart(data as IProduct))}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div> {/* Single Product */}

            <div className='productDetails'>
                <h3 className='detailHeader'>Details of {data?.name}</h3>

                <div className='description'>{data?.description}</div>
            </div>
        </div>
    </div >
}
export default SingleProduct;
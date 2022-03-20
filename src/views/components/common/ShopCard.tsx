import './ShopCard.scss';

const ShopCard = () => {
    return <div className='shopCard'>
        <img className='img' src='https://static-01.daraz.com.bd/p/821cbd22c49ef140f778bf11dea15f98.jpg' alt='Shop Img' />
        <img className='logo' src='https://static-01.daraz.com.bd/other/shop/cef3ab12e0513cf6f8a518ad3de0fc8d.jpeg' alt='Shop Name' />
        <div className='details'>
            <h4 className='name'>Philips</h4>
            <p className='type'>Sense & Simplicity</p>
        </div>
    </div>;
}
export default ShopCard
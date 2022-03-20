import { Link } from 'react-router-dom';
import LogoFull from 'assets/img/logo-full.png';

import './Header.scss';

const Header = () => {
    return <header className='headerTop'>
        <div className='container'>
            <a href='/' className='logo'>
                <img src={LogoFull} alt='Logo' />
            </a>

            <nav className='menu'>
                <Link to='/' className='menuLink'>
                    Home
                </Link>
                <Link to='/cart' className='menuLink'>
                    Cart
                </Link>
                <Link to='/login' className='menuLink'>
                    Login
                </Link>
            </nav>

            <div className='search'>
                <input type='search' placeholder='Search products' />
                <button><i className='material-icons'>search</i></button>
            </div>
        </div>
    </header>
}
export default Header;
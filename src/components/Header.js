import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img className='logo-img'
                    alt='Hotel Logo'
                    src={LOGO_URL}
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
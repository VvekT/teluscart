import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  

  const handleOpenCart = (open) => {
      dispatch(toggleCart(open));
  };

  
  const cartQuantity = cartItems.length;

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a id='logo' href='/'>Telus E-Cart</a>
      </div>
      <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>      
        <Link to='/home'>Home</Link>
        <Link to='/category'>Category</Link>
        <Link to='/about'>About</Link>
        <Link to='/service'>Service</Link>
        <Link to='/contact'>Contact</Link>
        {/* <Link to='/vegtablesfruits'>Vegtablesfruits</Link> */}
        <Link to='/register'>
        <Link to='/cart'>Cart</Link>
          <button>Sign Up</button>
        </Link>

      </div>

      <div
                                title="Cart"
                                className="cart_icon"
                                onClick={() => handleOpenCart(true)}
                            >
                              
                                <span className="badge">{cartQuantity}</span>
                                
                            </div>
                        
                        
                    
      <div className='mobile-toggle' onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
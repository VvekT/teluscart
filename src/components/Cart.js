import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../store/slices/cartSlice';
import products from '../json-api/products-api.json';

const Cart = () => {

    const { isCartOpen, cartItems } = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    // const [select,setSelect]=useState(false);
    function handleAlert() {
        alert("orderplaced successfully...");
        setOpen(true);
    }
    const dispatch = useDispatch();


    const handleCloseCart = (close) => {
        dispatch(toggleCart(close));
    };


    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };


    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };



    useEffect(() => {
        const docBody = document.body;

        isCartOpen ? (
            docBody.classList.add('overflow_hide')
        ) : (
            docBody.classList.remove('overflow_hide')
        );

    }, [isCartOpen]);


    const cartQuantity = cartItems.length;

    const cartTotal = cartItems.map(item => item.price * item.quantity)
        .reduce((prevValue, currValue) => prevValue + currValue, 0);

    const amazon = cartItems.map(item => item.quantity)
        .reduce((prevValue, currValue) => prevValue + currValue, 0);

    return (
        <>
            {
                isCartOpen && (
                    <div id="cart">
                        <div className="cart_content">
                            <div className="cart_head">
                                <h2>Cart <small>({cartQuantity})</small></h2>
                                <div
                                    title="Close"
                                    className="close_btn"
                                    onClick={() => handleCloseCart(false)}
                                >
                                    <span>&times;</span>
                                </div>
 </div>

          <div className="cart_body">
                                {
                                    cartQuantity === 0 ? (
                                        <h2>Shopping -Cart is empty...</h2>
                                    ) : (
                                        cartItems.map(products => {
                                            const { pro_id, pro_image, pro_name, price, quantity } = products;
                                            const itemTotal = price * quantity;

                                            return (
                                                <div className="cart_items" key={pro_id}>
                                                    <figure className="cart_items_img">
                                                        <img src={pro_image} alt="product-img" />
                                                    </figure>

                                                    <div className="cart_items_info">
                                                        <h4>{pro_name}</h4>
                                                        <h3 className="price">₹ {itemTotal.toLocaleString()}</h3>
                                                    </div>

                                                    <div className="cart_items_quantity">
                                                        <span onClick={() => handleDecrement(pro_id)}>&#8722;</span>
                                                        <b style={{ color: "black" }}>{quantity}</b>
                                                        <span onClick={() => handleIncrement(pro_id)}>&#43;</span>
                                                    </div>

                                                    <div
                                                        title="Remove Item"
                                                        className="cart_items_delete"
                                                        onClick={() => handleRemove(pro_id)}
                                                    >
                                                        <span>&times;</span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )
                                }
                            </div>

                            <div className="cart_foot">
                                <h3>
                                    <small style={{ color: "black" }}>Total:</small>
                                    <h5>₹ {cartTotal.toLocaleString()}</h5>
                                </h3>

                                <h3>
                                    <small style={{ color: "black" }}>Total:</small>
                                    <h5>₹ {amazon.toLocaleString()}</h5>
                                </h3>

                                <button
                                    type="button"
                                    class="checkout_btn"


                                    onClick={() => {
                                        handleAlert()
                                    }}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Cart;
import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import './Cart.css'

const Cart = () => {

    let products = [{
        "id": 1,
        "image": "https://haanready.com/cdn/shop/products/097_b1d76649-1e06-4321-bc51-e587fc52ef4d.jpg?v=1686050042",
        "title": "Hand Sanitizer Refill VE",
        "price": 9.90,
        "description": "Do you want to get over 1200 sprays of your Purifying Verbena hand sanitizer? Get this Refill pouch now and enjoy clean and moisturized hands for a lifetime. Best part? By getting this Refill you reduce 89% of the amount of plastic used to create a HAAN Pocket. "

    },
    {
        "id": 2,
        "image": "https://haanready.com/cdn/shop/products/047.jpg?v=1651510161",
        "title": "Hydrating Hand Sanitizer & Lanyard Pack - Purifying Verbena",
        "price": 9.90,
        "description": "Clean your hands anytime and anywhere, wearing your favorite Purifying Verbena HAAN Pocket with a cool and convenient accessory. 2 in 1 has never looked this stylish! * (Hand Sanitizer Included)"
    },
    {
        "id": 3,
        "image": "https://haanready.com/cdn/shop/products/097_b1d76649-1e06-4321-bc51-e587fc52ef4d.jpg?v=1686050042",
        "title": "Hand Sanitizer Refill VE",
        "price": 9.90,
        "description": "Do you want to get over 1200 sprays of your Purifying Verbena hand sanitizer? Get this Refill pouch now and enjoy clean and moisturized hands for a lifetime. Best part? By getting this Refill you reduce 89% of the amount of plastic used to create a HAAN Pocket. "

    },
    {
        "id": 4,
        "image": "https://haanready.com/cdn/shop/products/047.jpg?v=1651510161",
        "title": "Hydrating Hand Sanitizer & Lanyard Pack - Purifying Verbena",
        "price": 9.90,
        "description": "Clean your hands anytime and anywhere, wearing your favorite Purifying Verbena HAAN Pocket with a cool and convenient accessory. 2 in 1 has never looked this stylish! * (Hand Sanitizer Included)"
    }
    ];

    localStorage.setItem('cartItems', JSON.stringify(products));

    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [orderTotal, setOrderTotal] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [itemTotal, setItemTotal] = useState(0);
    const [count, setCount] = useState(0);


    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);

    }, []);

    useEffect(() => {
        const newSubtotal = cartItems.reduce((acc, item) => {
            return acc + (item.price);
        }, 0);
        setSubtotal(newSubtotal);
        setOrderTotal(newSubtotal)
    }, [cartItems]);

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const updateSubTotal = (itemTotal, action) => {
        let subTotal;
        subTotal = (action === "add") ? subtotal + itemTotal : subtotal - itemTotal;
        setOrderTotal(subTotal);
        setSubtotal(subTotal);

    }

    const total = (totalQuantity, action) => {
        // console.log(totalQuantity);
        setItemTotal(totalQuantity);
        updateSubTotal(totalQuantity, action);
    }

    const handleCoupon = (e) => {
        setCoupon(e.target.value);
    }

    const applyCoupon = () => {

        if (count === 0) {
            if (coupon === "APPLY10") {
                setOrderTotal(Math.ceil(orderTotal * 0.9));
                setCount(count + 1);
            }
            else {
                alert("Enter valid coupon code!!!");
            }
        }
        else {
            alert("Coupon already applied!!!")
        }
    }

    localStorage.setItem("totalPrice", JSON.stringify(orderTotal));

    return (
        <div>
            <h1>Cart Page</h1>
            <div id='cartPage'>
                <div id='section1'>
                    <p>HAAN </p>
                    <p>SANITIZERS</p>
                    <h4>Taking good care around</h4>
                </div>
                <div id='section2'>
                    {cartItems.length <= 0 ? <div style={{ alignItems: "center", margin: "10% 20%" }}> <h1>Your cart is empty!!!</h1>
                        <button style={{ padding: "10px", color: "green" }}>Continue Shopping</button></div> : <div>
                        <h2 style={{ textAlign: "left" }}>Your Cart ({cartItems.length} Items)</h2>
                        {cartItems.map(item => (

                            <CartItem key={item.id}
                                item={item}
                                removeFromCart={removeFromCart}
                                total={total}
                            />
                        ))}
                        <div className="coupon-box">
                            Coupon Code
                            <div>
                                <input type="text" onChange={(e) => { handleCoupon(e) }} />
                                <button onClick={applyCoupon} >Apply</button>
                            </div>
                        </div>
                        <div className="subtotal">Subtotal: <div>${subtotal}</div></div>
                        <div className="orderTotal">Order total: <div>${orderTotal}</div></div>
                        <button id="continue-btn">Continue</button>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart

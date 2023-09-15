import React, { useEffect, useRef, useState } from 'react';
import "./Checkout.css";
import CheckoutCard from './CheckoutCard';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [amount, setAmount] = useState(0);
    const [shippingAmount, setShippingAmount] = useState(0);

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    useEffect(() => {
        const itemTotalPrice = JSON.parse(localStorage.getItem('totalPrice')) || [];
        setAmount(itemTotalPrice);

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount === "") {
            alert("please enter amount");
        } else {
            var options = {
                key: "rzp_test_0bYm5zKZEO7ht4",
                key_secret: "ghs7HXvVCZNVItTYMdP14aZ1",
                amount: amount * 100,
                currency: "INR",
                name: "Carver Skateboards",
                description: "Payment",
                handler: function (response) {
                    alert("Payment successfull");
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    };

    const handleNextPage1 = () => {
        ref1.current.style.display = "none";
        ref2.current.style.display = "block";
    }

    const handleNextPage2 = () => {
        ref2.current.style.display = "none";
        ref3.current.style.display = "block";
    }

    const handlePageDisplay1 = () => {
        ref1.current.style.display = "block";
        ref2.current.style.display = "none";
    }

    const handlePageDisplay2 = () => {
        ref2.current.style.display = "block";
        ref3.current.style.display = "none";
    }

    return (
        <div>
            {/* <Cart /> */}
            <div id='nav'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBfgcfBrZRHc0z4mY7ornbUJr7Io8wrUW7Jkkb7rQtNxMRnqQz3_a7xKxuWjCmGWS5YU&usqp=CAU" alt="" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
                <div id='section-1'>
                    <h1 id='checkout-title'>Checkout</h1>
                    <div id='header' >
                        <p>Contacts</p>
                        <p>Shipping</p>
                        <p>Payment</p>
                    </div>
                    <section id='contact-section' ref={ref1}>
                        <div id='input-div'>
                            <input type="text" placeholder='First Name' /><br />
                            <input type="text" placeholder='Name' /><br />
                            <input type="text" placeholder='Phone Number' />
                        </div>
                        <div>
                            <button id='next-btn' onClick={handleNextPage1}>Next</button>
                        </div>
                    </section>
                    <section id='shipping-section' ref={ref2} style={{ display: "none" }}>
                        <p>Shipping address</p>
                        <div>
                            <div>
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <input type="text" />
                            <div>
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                        <p>Shipping method</p>
                        <input type="radio" id='standard' />
                        <label htmlFor="standard">Standard - 20</label>
                        <br />
                        <input type="radio" id='express' />
                        <label htmlFor="express">Express - 30</label>
                        <br />
                        <button style={{ border: "none", backgroundColor: "white" }} onClick={handlePageDisplay1}>Back</button>
                        <button id='next-btn' onClick={handleNextPage2}>Next</button>
                    </section>
                    <section id='payment-section' ref={ref3} style={{ display: "none" }}>
                        <div id='price-div' style={{ border: "1px solid gray", borderTop: "none" }}>
                            <div className="orderTotal">Order total: <div>${amount}</div></div>
                            <div className="orderTotal"> Shipping Charges : <div>{shippingAmount}</div></div>
                            <hr />
                            <div className="orderTotal">Total amount : <div>${amount}</div></div>
                        </div>
                        <button id="payment-btn" onClick={handleSubmit}>Make payment</button>
                        <button style={{ border: "none", backgroundColor: "white" }} onClick={handlePageDisplay2}>Back</button>

                    </section>
                </div>
                <div id='section-2'>
                    <div>
                        {cartItems.map((item) => (
                            <CheckoutCard key={item.id} item={item} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Checkout;

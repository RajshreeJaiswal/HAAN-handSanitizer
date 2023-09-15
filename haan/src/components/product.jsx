import React, { useEffect, useState } from "react";
import axios from 'axios';
import './product.css';
import { Link } from "react-router-dom";


const Product = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8080/handsanitizer`)
        .then((response)=>{
            setProducts(response.data);
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
    
 return (
    <div className="product-page">
        {products.map((product)=>(
            <div key={product.id} className="product">
                <img src={product.image} alt={product.name}/>
                <h3>{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart-button">Add to Cart</button> 
            </div>
        )
        )}
    </div>
 );
};

export default Product;
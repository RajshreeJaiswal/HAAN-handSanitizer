import React, { useEffect, useState } from "react";
import axios from 'axios';
import './product.css';
import { Link } from "react-router-dom";
import { FaShoppingCart ,FaHeart } from 'react-icons/fa';



const Product = () => {
    const [products,setProducts]=useState([]);
    const [order,setOrderBy]=useState("");
    const[page,setPage]=useState(1);
    const limit=12;
    const sort="price";

const getUrl=(url,order,sort)=>{
    if(order){
        return(url=`${url}&_sort=${sort}&_order=${order}`);
    }
    return url; 
}
const GetData=async(page)=>{
  let url=getUrl(`http://localhost:8080/handsanitizer?_page=${page}&_limit=${limit}`,
  order,sort);
  try{
    const res=await axios.get(url)
    // const data=await res.json();
    setProducts(res.data);
  }
//   axios.get(url)
//   .then((response)=>{
//       setProducts(response.data);
//       console.log(response);
//   })
  catch(err){
      console.log(err);
};
}
    useEffect(()=>{
       GetData(page);
    },[page,order]);

    const handleAddToCart = () => {
        alert("Added to Cart");
    };

    const handleWishlist = () => {
        alert("Added to Wishlist");
    };

 return (
    
    <div >
    
     <div className=" dropdown">
     <hr/>
        <label htmlFor="sort">Sort by Price:  </label>
        <select id="sort" style={{borderRadius:"4px", border: "1px solid #ccc",boxShadow:"0 0 5px"}}
        onChange={(e) => {
    setOrderBy(e.target.value);}}>
            <option value="default">Default</option>
            <option value="asc" >Price: Ascending </option>
            <option value="desc">Price: Descending</option>
        </select>
        <hr/> 
    </div>
    <div className="product-page">
        {products.map((product)=>(
            <div key={product.id} className="product">
                <img src={product.image} alt={product.name}/>
                <div className="button">
                <button className="add-to-cart-button" onClick={handleAddToCart}><FaShoppingCart/></button> 
                <button className="wishlist" onClick={handleWishlist}><FaHeart/></button>
                </div>
                <h3 style={{fontWeight:"bold",textAlign:"center"}}>{product.name}</h3>
                <p className="product-price">${product.price}</p>
                
            </div>
        )
        )}
        </div>
        <div className="pagination">
        <button className="prev" disabled={page===1} onClick={()=>{
            setPage(page-1)}}>Previous</button>
        <button className="cur">{page}</button>
        <button className="next" disabled={page===4} onClick={()=>{
            setPage(page+1)}}>Next</button>
        </div>
    </div>
 );
};

export default Product;
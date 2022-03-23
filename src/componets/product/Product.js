import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'



const Product = (props) => {
    const {img,name,price,seller,ratings} = props.myproducts;
    const cheakDataLenght = (name) =>{
       if(name){
           return name.slice(0,15);
       }
    }
    return (
        <div className='product'>
            <img src={img} alt="" />

           <div className='product-info'>
           <p className='container-name'>{cheakDataLenght(name)}</p>
            <p>Prices : {price}</p>
            <p><small>seller :{seller}</small></p>
            <p><small>Ratings :{ratings}</small></p>
           </div>

        <div className='add-button'>
            <button onClick={() => props.henderAddToCart(props.myproducts)}>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            

        </div>
        </div>
    );
};

// if(text.length > 30){
//     return text.slice(0, 30) + "<span>... read more</span>";
//   }
//   else{
//     return text;
//   }
//   
export default Product;
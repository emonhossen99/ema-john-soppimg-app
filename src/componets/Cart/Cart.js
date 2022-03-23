import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
console.log(cart);
   let total = 0;
   let shipping = 0;
   let quantity = 0;
   for(const product of cart){
       quantity = quantity + product.quantity;
       total = total + product.price * product.quantity;
       shipping = shipping + product.shipping;
   }
   const tax = parseFloat((total * 0.1).toFixed(2));
   const grandtotal = total + shipping + tax;

//    borth are same 
//    const tax = (total * 0.1).toFixed(2);
//    const grandtotal = total + shipping + +tax;


    return (
        <div className='cart'>
            <h2>Oder Summary</h2>
            <p>Seleted Items :{quantity}</p>
            <p>Total Prices : ${total}</p>
            <p>Total Shopping : ${shipping}</p> 
            <p>Tax : ${tax}</p>
            <h5>Grand Total : ${grandtotal.toFixed(2)}</h5> 
        </div>
    );
};

export default Cart;
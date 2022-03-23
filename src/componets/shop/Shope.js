import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shope.css';

const Shope = () => {
    const [products,setProduct] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);


    useEffect(() => {
        const stortedCart = getStoredCart();
        const saveCart = [];
       for(const id in stortedCart){
           const addedProduct = products.find(product => id === product.id)
           if(addedProduct){
               const quantity = stortedCart[id];
               addedProduct.quantity = quantity
               saveCart.push(addedProduct);

           }
       }
       setCart(saveCart)
    },[products])

    const hendelAddToCart = (myproducts) => {
        let  newCart = [];
        const exists = cart.find(product => product.id === myproducts.id);
        if(!exists){
            myproducts.quantity = 1;
            newCart = [...cart,myproducts]
        }
        else{
            const rest = cart.filter(product => product.id !== myproducts.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists]
        }
        
        setCart(newCart);
        addToDb(myproducts.id)
    }
    return (
        <div className='shope-container'>
            <div className='products-container'>
           {
               products.map(product =><Product 
                myproducts={product} 
                key={product.id}
                henderAddToCart ={hendelAddToCart} ></Product>)
           }
            </div>
            <div className='cart-container'>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shope;
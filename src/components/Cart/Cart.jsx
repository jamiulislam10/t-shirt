import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    
    let message;
    if(cart.length ===0){
        message= <p>Please add a some product</p>
    }
    else{
        message = <div>
            <h3>Thanks for wasting your money</h3>
        </div>
    }
    
    
    
    
    
    
    
    return (
        <div>
            <h3 className={cart.length === 1 ? 'blue':'red'}>Order summary: {cart.length}</h3>
            {cart.length > 2 ? <span className='purple'>Aro kino</span>: <span>Fokira customer</span>}
            
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {cart.length === 2 && <p>Double bonus!!!</p>}
        {cart.length===3 || <h3>Tinta tw hoilo na</h3>}
        
        </div>
    );
};

export default Cart;
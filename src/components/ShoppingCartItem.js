import React, {useContext} from 'react';

import {CartContext} from '../contexts/CartContext'; 

const Item = props => {

	const {cart, setCart} = useContext(CartContext); 

	//try putting this function in app component and passing it down 
	const removeItem = () => {
		setCart(cart.filter(item => {
			if(item.id !== props.id){
				return item 
			} else {
				return null
			}
		}))
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={removeItem}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;

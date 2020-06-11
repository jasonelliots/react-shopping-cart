import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts

import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext'; 

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([item, ...cart])
	};

	// const removeItem = props => {
	// 	setCart(cart.map(item => {
	// 		if(item.id !== props.id){
	// 			return item 
	// 		} else {
	// 			return null 
	// 		}
	// 	}))
	// }

	return (
		<div className="App">
		<ProductContext.Provider value={{ products, addItem }}>

		<CartContext.Provider value={{cart}}>
			<Navigation />
		</CartContext.Provider>

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

		<CartContext.Provider value={{cart, setCart}}>
			<Route path="/cart">
				<ShoppingCart />
			
			</Route>
		</CartContext.Provider>

		</ProductContext.Provider>
		</div>
	);
}

export default App;

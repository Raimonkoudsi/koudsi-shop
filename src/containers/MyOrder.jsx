import React, {useContext} from 'react';
import '@styles/MyOrder.scss';

//assets
import flechaIcon from '@icons/flechita.svg';

//context
import AppContext from '@context/AppContext';

//components
import OrderItem from '@components/OrderItem';

const MyOrder = () => {

	const { 
		state:{cart} 
	} = useContext(AppContext);

	//suma de precios a totales
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="my-order">
			<div className="title-container">
				<img src={flechaIcon} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{cart.map(item => (
					//hay conflicto con el key si en todos coloco solamente product id, por eso agrego el texto
					<OrderItem product={item} key={`orderItem-${item.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
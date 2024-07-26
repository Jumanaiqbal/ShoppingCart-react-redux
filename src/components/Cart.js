import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { remove } from '../store/cartSlice';
const Cart = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.cart);
	const removeToCart = (id) => {
		dispatch(remove(id));
	};
	const cards = products.map((product) => (
		<div
			className='col-md-12'
			style={{ marginBottom: '10px', justifyContent: 'center' }}>
			<Card key={product.id} className='h-100'>
				<div className='text-center'>
					<Card.Img
						variant='top'
						src={product.image}
						style={{ width: '100px', height: '130px' }}
					/>
				</div>

				<Card.Body className='d-flex justify-content-center'>
					<Card.Title>{product.title}</Card.Title>
					<Card.Text>${product.price}</Card.Text>
				</Card.Body>
				<Card.Footer className='d-flex justify-content-center'>
					<Button variant='danger' onClick={() => removeToCart(product.id)}>
						Delete
					</Button>
				</Card.Footer>
			</Card>
		</div>
	));
	return (
		<>
			<div className='row'>{cards}</div>
		</>
	);
};

export default Cart;

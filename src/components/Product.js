import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {
	const dispath = useDispatch();

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((data) => data.json())
			.then((result) => setProducts(result));
	}, []);
	const addToCart = (product) => {
		//dispath
		dispath(add(product));
	};
	const cards = products.map((product) => (
		<div className='col-md-3' style={{ marginBottom: '10px' }}>
			{/* <Card key={product.id} className="h-100"> */}

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
					<Button
						variant='primary'
						color='white'
						className='text-center'
						onClick={() => addToCart(product)}>
						Add To Cart
					</Button>
				</Card.Footer>
			</Card>
		</div>
	));

	return (
		<>
			<h2 className='text-center'>Product Catalogue</h2>
			<div className='row'>{cards}</div>
		</>
	);
};

export default Product;

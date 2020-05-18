import React from "react"

function Product(props) {
	return (
		<div>
			<h1>{props.product.name}</h1>
			<h2>{props.product.description}</h2>
			<h3>${props.product.price}</h3>
		</div>
	);
}

export default Product

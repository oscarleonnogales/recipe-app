import React from 'react';

export default function Ingredient(props) {
	return (
		<>
			<span>{props.name}</span>
			<span>{props.amount}</span>
		</>
	);
}

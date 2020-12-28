import React from 'react';

export default function RecipeIngredientEdit({ ingredient }) {
	return (
		<>
			<input type="text" className="recipe-list__input" value={ingredient.name}></input>
			<input type="text" className="recipe-list__input" value={ingredient.amount}></input>
			<button className="btn remove-button">&times;</button>
		</>
	);
}

import React from 'react';

export default function RecipeIngredientEdit({ ingredient, handleIngredientChange }) {
	function handleChange(changes) {
		handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
	}

	return (
		<>
			<input
				type="text"
				className="recipe-list__input"
				value={ingredient.name}
				onInput={(e) => handleChange({ name: e.target.value })}
			></input>
			<input
				type="text"
				className="recipe-list__input"
				value={ingredient.amount}
				onInput={(e) => handleChange({ amount: e.target.value })}
			></input>
			<button className="btn remove-button">&times;</button>
		</>
	);
}

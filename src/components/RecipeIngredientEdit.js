import React from 'react';

export default function RecipeIngredientEdit({ ingredient, handleIngredientChange, handleIngredientDelete }) {
	function handleChange(changes) {
		handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
	}

	return (
		<>
			<input
				type="text"
				className="recipe-list__input"
				value={ingredient.name}
				onChange={(e) => handleChange({ name: e.target.value })}
			></input>
			<input
				type="text"
				className="recipe-list__input"
				value={ingredient.amount}
				onChange={(e) => handleChange({ amount: e.target.value })}
			></input>
			<button className="btn remove-button" onClick={() => handleIngredientDelete(ingredient.id)}>
				&times;
			</button>
		</>
	);
}

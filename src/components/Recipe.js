import React from 'react';
import IngredientList from './IngredientList';

export default function Recipe(props) {
	const { id, name, cookTime, servings, instructions, ingredients, handleRecipeDelete } = props;

	return (
		<div className="recipe">
			<div className="recipe-header">
				<h3 className="recipe-title">{name}</h3>
				<div>
					<button className="btn edit-button mr-1">Edit</button>
					<button className="btn remove-button" onClick={() => handleRecipeDelete(id)}>
						Remove
					</button>
				</div>
			</div>
			<div className="recipe-row">
				<span className="recipe-label">Cook Time: </span>
				<span className="recipe-value">{cookTime}</span>
			</div>
			<div className="recipe-row">
				<span className="recipe-label">Servings: </span>
				<span className="recipe-value">{servings}</span>
			</div>
			<div className="recipe-row">
				<span className="recipe-label">Instructions: </span>
				<div className="recipe-value indent">{instructions}</div>
			</div>
			<div className="recipe-row">
				<span className="recipe-label">Ingredients: </span>
				<div className="recipe-value indent">
					<IngredientList ingredients={ingredients}></IngredientList>
				</div>
			</div>
		</div>
	);
}

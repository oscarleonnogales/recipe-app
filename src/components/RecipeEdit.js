import React from 'react';
import './RecipeIngredientEdit';
import RecipeIngredientEdit from './RecipeIngredientEdit';

export default function RecipeEdit() {
	return (
		<div className="recipe-edit">
			<div className="recipe-edit__close-btn-container">
				<button className="btn recipe-edit-remove-button">&times;</button>
			</div>
			<div className="recipe-edit__details-grid">
				<label htmlFor="name" className="recipe-edit__label">
					Name
				</label>
				<input type="text" name="name" id="name" className="recipe-list__input"></input>
				<label htmlFor="cookTime" className="recipe-edit__label">
					Cook Time
				</label>
				<input type="text" name="cookTime" id="cookTime" className="recipe-list__input"></input>
				<label htmlFor="servings" className="recipe-edit__label">
					Servings
				</label>
				<input type="number" min="1" name="servings" id="servings" className="recipe-list__input"></input>
				<label htmlFor="instructions" className="recipe-edit__label">
					Instructions
				</label>
				<textarea name="instructions" id="instructions" className="recipe-list__input"></textarea>
			</div>
			<br />
			<label className="recipe-edit__label">Ingredients</label>
			<div className="recipe-edit__ingredient-grid">
				<div>Name</div>
				<div>Amount</div>
				<div></div>
				<RecipeIngredientEdit></RecipeIngredientEdit>
				<RecipeIngredientEdit></RecipeIngredientEdit>
			</div>
			<div className="recipe-edit__add-ingredient-btn-container">
				<button className="btn add-recipe-btn">Add Ingredient</button>
			</div>
		</div>
	);
}

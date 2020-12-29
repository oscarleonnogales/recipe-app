import React, { useContext } from 'react';
import './RecipeIngredientEdit';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';

export default function RecipeEdit({ recipe }) {
	const { handleRecipeChange } = useContext(RecipeContext);

	function handleChange(changes) {
		handleRecipeChange(recipe.id, { ...recipe, ...changes });
	}

	function handleIngredientChange(id, newIngredient) {
		const newIngredients = [...recipe.ingredients];
		const index = newIngredients.findIndex((ingredient) => ingredient.id === id);
		newIngredients[index] = newIngredient;
		handleChange({ ingredients: newIngredients });
	}

	return (
		<div className="recipe-edit">
			<div className="recipe-edit__close-btn-container">
				<button className="btn recipe-edit-remove-button">&times;</button>
			</div>
			<div className="recipe-edit__details-grid">
				<label htmlFor="name" className="recipe-edit__label">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					className="recipe-list__input"
					value={recipe.name}
					onInput={(e) => handleChange({ name: e.target.value })}
				></input>
				<label htmlFor="cookTime" className="recipe-edit__label">
					Cook Time
				</label>
				<input
					type="text"
					name="cookTime"
					id="cookTime"
					className="recipe-list__input"
					value={recipe.cookTime}
					onInput={(e) => handleChange({ cookTime: e.target.value })}
				></input>
				<label htmlFor="servings" className="recipe-edit__label">
					Servings
				</label>
				<input
					type="number"
					min="1"
					name="servings"
					id="servings"
					className="recipe-list__input"
					value={recipe.servings}
					onInput={(e) => handleChange({ servings: parseInt(e.target.value) || '' })}
				></input>
				<label htmlFor="instructions" className="recipe-edit__label">
					Instructions
				</label>
				<textarea
					name="instructions"
					id="instructions"
					className="recipe-list__input"
					value={recipe.instructions}
					onInput={(e) => handleChange({ instructions: e.target.value })}
				></textarea>
			</div>
			<br />
			<label className="recipe-edit__label">Ingredients</label>
			<div className="recipe-edit__ingredient-grid">
				<div>Name</div>
				<div>Amount</div>
				<div></div>
				{recipe.ingredients.map((ingredient) => {
					return (
						<RecipeIngredientEdit
							key={ingredient.id}
							ingredient={ingredient}
							handleIngredientChange={handleIngredientChange}
						></RecipeIngredientEdit>
					);
				})}
			</div>
			<div className="recipe-edit__add-ingredient-btn-container">
				<button className="btn add-recipe-btn">Add Ingredient</button>
			</div>
		</div>
	);
}

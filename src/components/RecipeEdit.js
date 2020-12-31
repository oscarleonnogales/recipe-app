import React, { useContext } from 'react';
import './RecipeIngredientEdit';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';
import uuidv4 from '../../node_modules/uuid/dist/v4';

export default function RecipeEdit({ recipe }) {
	const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

	function handleChange(changes) {
		handleRecipeChange(recipe.id, { ...recipe, ...changes });
	}

	function handleIngredientChange(id, newIngredient) {
		const newIngredients = [...recipe.ingredients];
		const index = newIngredients.findIndex((ingredient) => ingredient.id === id);
		newIngredients[index] = newIngredient;
		handleChange({ ingredients: newIngredients });
	}

	function handleIngredientAdd() {
		const newIngredient = {
			id: uuidv4(),
			name: '',
			amount: '',
		};
		handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
	}

	function handleIngredientDelete(id) {
		handleChange({
			ingredients: recipe.ingredients.filter((i) => i.id !== id),
		});
	}

	return (
		<div className="recipe-edit">
			<div className="recipe-edit__close-btn-container">
				<button className="btn recipe-edit-remove-button" onClick={() => handleRecipeSelect(undefined)}>
					&times;
				</button>
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
					onChange={(e) => handleChange({ name: e.target.value })}
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
					onChange={(e) => handleChange({ cookTime: e.target.value })}
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
					onChange={(e) => handleChange({ servings: parseInt(e.target.value) || '' })}
				></input>
				<label htmlFor="instructions" className="recipe-edit__label">
					Instructions
				</label>
				<textarea
					name="instructions"
					id="instructions"
					className="recipe-list__input"
					value={recipe.instructions}
					onChange={(e) => handleChange({ instructions: e.target.value })}
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
							handleIngredientDelete={handleIngredientDelete}
						></RecipeIngredientEdit>
					);
				})}
			</div>
			<div className="recipe-edit__add-ingredient-btn-container">
				<button className="btn add-recipe-btn" onClick={() => handleIngredientAdd()}>
					Add Ingredient
				</button>
			</div>
		</div>
	);
}

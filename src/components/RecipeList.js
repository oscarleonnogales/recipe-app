import React from 'react';
import Recipe from './Recipe';

export default function RecipeList({ recipes, handleRecipeAdd, handleRecipeDelete }) {
	return (
		<>
			<div className="recipe-list">
				{recipes.map((recipe) => {
					return <Recipe key={recipe.id} {...recipe} handleRecipeDelete={handleRecipeDelete}></Recipe>;
				})}
				<div className="add-recipe-btn-container">
					<button className="btn add-recipe-btn" onClick={handleRecipeAdd}>
						Add Recipe
					</button>
				</div>
			</div>
		</>
	);
}

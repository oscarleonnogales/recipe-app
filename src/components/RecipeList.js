import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipeContext } from './App';

export default function RecipeList({ recipes }) {
	const { handleRecipeAdd } = useContext(RecipeContext);
	return (
		<>
			<div className="recipe-list">
				{recipes.map((recipe) => {
					return <Recipe key={recipe.id} {...recipe}></Recipe>;
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

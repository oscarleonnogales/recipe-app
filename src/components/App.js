import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../styles/app.css';
import uuidv4 from '../../node_modules/uuid/dist/v4';

function App() {
	const [recipes, setRecipes] = useState(sampleRecipes);

	function handleRecipeAdd() {
		const newRecipe = {
			id: uuidv4(),
			name: 'new',
			servings: 1,
			cookTime: '1 hr',
			instructions: 'Instruct',
			ingredients: [
				{
					id: uuidv4(),
					name: 'name',
					amount: '1 tbs',
				},
			],
		};

		setRecipes([...recipes, newRecipe]);
	}

	function handleRecipeDelete(id) {
		setRecipes(recipes.filter((recipe) => recipe.id !== id));
	}

	return (
		<>
			<RecipeList
				recipes={recipes}
				handleRecipeAdd={handleRecipeAdd}
				handleRecipeDelete={handleRecipeDelete}
			></RecipeList>
		</>
	);
}

export default App;

const sampleRecipes = [
	{
		id: 1,
		name: 'PB&J Sandwich',
		cookTime: '2 minutes',
		servings: 1,
		instructions: '1. get bread\n2. get pb\n3. put pb on bread\n4. close bread and enjoy',
		ingredients: [
			{
				id: 1,
				name: 'peanut butter',
				amount: '1 kg',
			},
			{
				id: 2,
				name: 'bread',
				amount: '2 slices',
			},
		],
	},
	{
		id: 2,
		name: 'Plain Chicken',
		cookTime: '1 hour',
		servings: 3,
		instructions: '1. get chicken\n2. salt the chicken\n3. put it in the oven\n4. cook and then eat',
		ingredients: [
			{
				id: 1,
				name: 'chicken',
				amount: '2 kg',
			},
			{
				id: 2,
				name: 'salt',
				amount: '5 g',
			},
		],
	},
];

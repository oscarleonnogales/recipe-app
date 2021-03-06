import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import '../styles/app.css';
import uuidv4 from '../../node_modules/uuid/dist/v4';
import './RecipeEdit';
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext();

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
	const [recipes, setRecipes] = useState(sampleRecipes);
	const [selectedRecipeId, setSelectedRecipeId] = useState();
	const selectedRecipe = recipes.find((recipe) => recipe.id === selectedRecipeId);

	useEffect(() => {
		const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (recipesJSON !== null) setRecipes(JSON.parse(recipesJSON));
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
	}, [recipes]);

	const recipeContextValue = {
		handleRecipeAdd,
		handleRecipeDelete,
		handleRecipeSelect,
		handleRecipeChange,
	};

	function handleRecipeAdd() {
		const newRecipe = {
			id: uuidv4(),
			name: '',
			servings: 1,
			cookTime: '',
			instructions: '',
			ingredients: [
				{
					id: uuidv4(),
					name: '',
					amount: '',
				},
			],
		};
		setSelectedRecipeId(newRecipe.id);
		setRecipes([...recipes, newRecipe]);
	}

	function handleRecipeDelete(id) {
		if (selectedRecipeId != null && selectedRecipeId === id) setSelectedRecipeId(undefined);
		setRecipes(recipes.filter((recipe) => recipe.id !== id));
	}

	function handleRecipeChange(id, newRecipe) {
		const newRecipes = [...recipes];
		const index = newRecipes.findIndex((recipe) => recipe.id === id);
		newRecipes[index] = newRecipe;
		setRecipes(newRecipes);
	}

	function handleRecipeSelect(id) {
		setSelectedRecipeId(id);
	}

	return (
		<RecipeContext.Provider value={recipeContextValue}>
			<RecipeList recipes={recipes}></RecipeList>
			{selectedRecipe && <RecipeEdit recipe={selectedRecipe}></RecipeEdit>}
		</RecipeContext.Provider>
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

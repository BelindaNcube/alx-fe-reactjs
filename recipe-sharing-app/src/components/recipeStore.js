
import { create } from 'zustand'

// Initial data for easy testing
const initialRecipes = [
  { id: '1678886400000', title: 'Simple Scrambled Eggs', description: 'Quick and fluffy scrambled eggs with butter.' },
  { id: '1678886400001', title: 'Overnight Oats', description: 'Healthy oatmeal prepared the night before.' },
];

export const useRecipeStore = create(set => ({
  recipes: initialRecipes, // Use initial data here

  // Action: Add a new recipe (Existing from Task 0)
  addRecipe: (newRecipe) => set(state => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),

  // Action: Update a recipe (NEW)
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Action: Delete a recipe (NEW)
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
  })),

  // Action: Set all recipes (Existing from Task 0)
  setRecipes: (recipes) => set({ recipes })
}));
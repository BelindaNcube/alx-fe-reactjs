import { create } from 'zustand'

export const useRecipeStore = create(set => ({
  // State: Initial empty array for recipes
  recipes: [],

  // Action: Add a new recipe to the array
  addRecipe: (newRecipe) => set(state => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),

  // Action: Set the entire recipes array (optional, but in the template)
  setRecipes: (recipes) => set({ recipes })
}));
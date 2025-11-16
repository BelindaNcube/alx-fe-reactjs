// src/components/recipeStore.js (Updated for Task 3)
import { create } from 'zustand'; 
import { subscribeWithSelector } from 'zustand/middleware';

// Initial data for easy testing (Keep your existing data, or simplify it)
const initialRecipes = [
  { id: '1678886400000', title: 'Simple Scrambled Eggs', description: 'Quick and fluffy scrambled eggs with butter.', ingredients: 'eggs, butter, salt' },
  { id: '1678886400001', title: 'Overnight Oats', description: 'Healthy oatmeal prepared the night before.', ingredients: 'oats, milk, chia seeds' },
  { id: '1678886400002', title: 'Chicken Stir-fry', description: 'A quick weeknight chicken and vegetable stir-fry.', ingredients: 'chicken, broccoli, soy sauce' },
  { id: '1678886400003', title: 'Tomato Pasta', description: 'Classic pasta with a simple tomato sauce.', ingredients: 'pasta, tomatoes, basil' },
];

export const useRecipeStore = create(subscribeWithSelector((set, get) => ({
  // --- EXISTING STATE (from Tasks 0, 1, 2) ---
  recipes: initialRecipes,
  searchTerm: '',
  filteredRecipes: initialRecipes,
  
  // --- NEW STATE (for Task 3) ---
  favorites: [], // Stores IDs of favorite recipes
  recommendations: [],

  // --- EXISTING ACTIONS (from Tasks 0, 1, 2) ---
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe),
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
  })),
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => { /* ... existing filtering logic ... */ }, // Retain existing logic
  
  // --- NEW ACTIONS (for Task 3) ---
  addFavorite: (recipeId) => set(state => {
    // Check if ID is already a favorite to prevent duplicates
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state;
  }),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Mock implementation for recommendations: returns random recipes or favorites
  generateRecommendations: () => set(state => {
    const favoriteRecipes = state.recipes.filter(recipe => state.favorites.includes(recipe.id));
    
    // Simple recommendation logic: show all non-favorite recipes, then filter randomly
    const nonFavoriteRecipes = state.recipes.filter(recipe => !state.favorites.includes(recipe.id));
    
    // Mock recommendations: take a few non-favorites at random
    const recommended = nonFavoriteRecipes.filter(() => Math.random() > 0.6).slice(0, 3);
    
    // Ensure favorites are also recommended if there are no other options
    const finalRecs = recommended.length > 0 ? recommended : favoriteRecipes.slice(0, 3);
    
    return { recommendations: finalRecs };
  }),

})));

// 💡 Update the subscription: Run filterRecipes and generateRecommendations
useRecipeStore.subscribe(
  (state) => [state.searchTerm, state.recipes, state.favorites], // VITAL: Watch 'favorites' now
  () => {
    useRecipeStore.getState().filterRecipes();
    useRecipeStore.getState().generateRecommendations(); // Trigger recommendations on favorite changes
  },
  { fireImmediately: true }
);
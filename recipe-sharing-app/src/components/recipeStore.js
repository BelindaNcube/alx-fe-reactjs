// Import 'devtools' and 'subscribeWithSelector' for advanced state manipulation
import { create } from 'zustand'; 
import { subscribeWithSelector } from 'zustand/middleware';

// Initial data for easy testing (Use your current initial data, adding a few more)
const initialRecipes = [
  { id: '1678886400000', title: 'Simple Scrambled Eggs', description: 'Quick and fluffy scrambled eggs with butter.', ingredients: 'eggs, butter, salt' },
  { id: '1678886400001', title: 'Overnight Oats', description: 'Healthy oatmeal prepared the night before.', ingredients: 'oats, milk, chia seeds' },
  { id: '1678886400002', title: 'Chicken Stir-fry', description: 'A quick weeknight chicken and vegetable stir-fry.', ingredients: 'chicken, broccoli, soy sauce' },
];

// Wrap create with subscribeWithSelector to allow reacting to state changes
export const useRecipeStore = create(subscribeWithSelector((set, get) => ({
  // --- STATE ---
  recipes: initialRecipes,
  searchTerm: '',
  filteredRecipes: initialRecipes, // Initialize with all recipes

  // --- ACTIONS ---
  // Sets the search term state
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Computes and sets the filteredRecipes state
  filterRecipes: () => {
    const state = get();
    const term = state.searchTerm.toLowerCase();

    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term) ||
      (recipe.ingredients && recipe.ingredients.toLowerCase().includes(term)) // Check ingredients too
    );
    set({ filteredRecipes: filtered });
  },

  // Existing actions (addRecipe, updateRecipe, deleteRecipe)
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
  })),
  setRecipes: (recipes) => set({ recipes })
})));

// 💡 Automatic Filtering Subscription
// Subscribe to changes in recipes or searchTerm and trigger filterRecipes
useRecipeStore.subscribe(
  (state) => [state.searchTerm, state.recipes], // Watch these state properties
  () => {
    useRecipeStore.getState().filterRecipes();
  },
  { fireImmediately: true } // Run the filter immediately on load
);
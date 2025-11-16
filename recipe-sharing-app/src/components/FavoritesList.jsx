import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton'; // Make sure this is imported!
import React, { useMemo } from 'react'; // <--- NEW IMPORT

const FavoritesList = () => {
  // Select the necessary state slices for the dependency array
  const favoriteIds = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  // 1. Memoize the transformation logic
  const favorites = useMemo(() => {
    // 2. Only run this complex mapping logic when favoriteIds or recipes changes
    return favoriteIds.map(id =>
      recipes.find(recipe => recipe.id === id)
    ).filter(recipe => recipe);
    
  }, [favoriteIds, recipes]); // 3. Dependency Array: Triggers recalculation only when these change

  return (
    // ... rest of your component logic
    <div style={{ padding: '20px', border: '1px solid gold', marginBottom: '30px' }}>
      <h2>My Favorites ({favorites.length})</h2>
      {/* ... rest of rendering logic ... */}
    </div>
  );
};

export default FavoritesList;

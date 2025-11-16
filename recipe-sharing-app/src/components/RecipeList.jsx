import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  // 💡 Change: Select the 'filteredRecipes' array instead of the raw 'recipes' array
  const recipes = useRecipeStore(state => state.filteredRecipes); 
  
  // The rest of the component logic remains the same, displaying the 'recipes' (now filtered) array
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Recipe List ({recipes.length} results)</h2> 
      {/* ... rest of the rendering logic using the 'recipes' array ... */}
      {recipes.length === 0 ? (
        <p>No recipes match your search criteria.</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px dotted #eee' }}>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
            <FavoriteButton recipeId={recipe.id} /> {/* NEW: Add Favorite Button */}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
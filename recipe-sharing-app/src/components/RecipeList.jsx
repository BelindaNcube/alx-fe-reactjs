import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Recipe List ({recipes.length})</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px dotted #eee' }}>
            {/* VITAL: Use Link to navigate to the details page */}
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
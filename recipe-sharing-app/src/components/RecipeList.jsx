import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  // Selects only the 'recipes' array from the store state
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px dotted #eee' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
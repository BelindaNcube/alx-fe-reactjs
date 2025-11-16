import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get the ID from the URL (Step 3)
  const [isEditing, setIsEditing] = useState(false);
  
  // Select the specific recipe based on the ID from the URL
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );
  
  if (!recipe) {
    return <h1>Recipe Not Found!</h1>;
  }
  
  // Function to switch back to detail view after saving edits
  const handleSave = () => setIsEditing(false);

  return (
    <div style={{ padding: '20px' }}>
      {isEditing ? (
        // Renders the Edit Form if 'isEditing' is true
        <EditRecipeForm recipe={recipe} onSave={handleSave} />
      ) : (
        // Default Details View
        <div>
          <h1>{recipe.title}</h1>
          <p>ID: {recipe.id}</p>
          <p style={{ fontSize: '1.1em', lineHeight: '1.5' }}>
            **Description:** {recipe.description}
          </p>
          

          <button 
            onClick={() => setIsEditing(true)}
            style={{ padding: '10px', backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}
          >
            Edit Recipe
          </button>
          <FavoriteButton recipeId={recipe.id} /> {/* NEW: Add Favorite Button */}
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
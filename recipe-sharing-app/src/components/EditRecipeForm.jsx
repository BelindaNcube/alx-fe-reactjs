import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe, onSave }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  // Initialize local state with current recipe data
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) return; 

    // Call the Zustand action to update the existing recipe
    updateRecipe({ 
      id: recipe.id, 
      title: title, 
      description: description 
    });
    
    // Call the callback to close the form (optional state management)
    if (onSave) onSave();
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid orange', padding: '20px', marginTop: '20px' }}>
      <h3>Edit Recipe: {recipe.title}</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '90%' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '90%', height: '100px' }}
      />
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: 'orange', color: 'white' }}>
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  // Selects only the 'addRecipe' action from the store
  const addRecipe = useRecipeStore(state => state.addRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) return; 

    // Calls the Zustand action, passing a new recipe object
    addRecipe({ 
      id: Date.now(), // Simple unique ID generator
      title, 
      description 
    });

    // Clear local form state
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #007bff', marginBottom: '30px' }}>
      <h3>Add New Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }}
      />
      <button type="submit" style={{ padding: '10px 15px' }}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;

import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  // Select the action to update the search term
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  
  return (
    <div style={{ margin: '20px 0', border: '1px solid #4CAF50', padding: '10px' }}>
      <input
        type="text"
        placeholder="Search recipes by Title, Description, or Ingredients..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default SearchBar;
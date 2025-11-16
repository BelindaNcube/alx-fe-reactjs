import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom'; // Required for navigation after delete

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      // After deleting, navigate back to the home page (RecipeList)
      navigate('/'); 
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', marginLeft: '10px' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
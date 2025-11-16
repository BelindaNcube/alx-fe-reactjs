// src/components/FavoriteButton.jsx
import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  // Select the necessary state (favorites) and actions
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button 
      onClick={handleClick}
      style={{ 
        backgroundColor: isFavorite ? 'gold' : 'lightgray', 
        border: 'none', 
        cursor: 'pointer', 
        marginLeft: '10px',
        padding: '8px 15px',
        fontWeight: 'bold'
      }}
    >
      {isFavorite ? '★ Favorited' : '☆ Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
// src/components/RecommendationsList.jsx
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div style={{ padding: '20px', border: '1px solid lightgreen', marginBottom: '30px' }}>
      <h2>✨ Personalized Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>Star a few recipes to get recommendations!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px dotted lightgreen' }}>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#28a745' }}>
              <h4>{recipe.title}</h4>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
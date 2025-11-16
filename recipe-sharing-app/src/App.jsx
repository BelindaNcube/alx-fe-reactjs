import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; // New import

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
        <h1>Zustand Recipe App</h1>
        <Routes>
          {/* Main Layout Route: Shows the list and add form */}
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          
          {/* Detail Route: Uses the dynamic parameter :recipeId */}
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          
          {/* Optional: 404 Route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
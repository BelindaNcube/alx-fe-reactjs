// src/App.jsx (Updated for Task 3)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; 
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'; // NEW
import RecommendationsList from './components/RecommendationsList'; // NEW

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial', display: 'flex' }}>
        
        {/* Sidebar/Recommendations Column */}
        <div style={{ width: '300px', padding: '20px', borderRight: '1px solid #eee' }}>
          <h1 style={{ fontSize: '2em', textAlign: 'center' }}>Recipe App</h1>
          <FavoritesList />
          <RecommendationsList />
        </div>
        
        {/* Main Content Column */}
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            {/* Main Layout Route: Shows SearchBar, AddForm, and List */}
            <Route path="/" element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            } />
            
            {/* Detail Route */}
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
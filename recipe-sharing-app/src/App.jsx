import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // Import new component

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
        <h1>Zustand Recipe App</h1>
        <Routes>
          {/* Main Layout Route: Shows SearchBar, AddForm, and List */}
          <Route path="/" element={
            <>
              <SearchBar /> {/* VITAL: Place search bar above list */}
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          
          {/* Detail Route */}
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Zustand Recipe App Initialization (Task 0)</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import MainRoutes from './Components/MainRoutes';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;

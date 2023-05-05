import './App.css';
import Product from './Pages/Product';
import Productlist from './Components/ProductComponents/Productlist';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import MainRoutes from './Components/MainRoutes';

function App() {
  return (
    <div className="App">
       <Product/>
      <HomePage />
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;

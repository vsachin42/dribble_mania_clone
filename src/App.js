import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Components/MainRoutes';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      {/* <Footer/> */}
    </div>
  );
}

export default App;

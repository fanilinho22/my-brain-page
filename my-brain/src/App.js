import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import Team from './Pages/Team/Team'
import Footer from './Pages/Footer/Footer'
import ScrollToTopBtn from './Components/scrollToTopBtn/ScrollToTopBtn'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Products/>
      <Team/>
      <Footer/>
      <ScrollToTopBtn/>
    </div>
  );
}

export default App;

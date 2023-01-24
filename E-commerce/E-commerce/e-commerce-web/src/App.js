import './App.css';
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Feature from "./Components/Feature/Feature"
import Arrival from "./Components/Arrival/Arrival"
import Gallery from "./Components/Gallery/Gallery"
import Deal from "./Components/Deal/Deal"
import NewsLetter from "./Components/NewsLetter/NewsLetter"
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Arrival/>
        <Feature/>
        <Gallery/>
        <Deal/>
        <NewsLetter/>
        <Footer/>
    </div>
  );
}

export default App;

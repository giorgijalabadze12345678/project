import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Ul/Hero";
import Exercises from "./components/Ul/Excercises";
import Start from "./components/Ul/Start";
import Pricing from "../src/components/Ul/pricing"
import Footer from "./components/Ul/Footer";
function App() {
  return(

  <>
  <Header />
  <Hero />
  <Exercises />
<Start/>
<Pricing/>
<Footer/>
  </>
  );
}

export default App;

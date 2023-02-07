import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact"
import Services from "./components/Services"
import Exe3 from "./components/counter"
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/footer.scss";
import "./styles/Home.scss";
import "./styles/mediaquery.scss";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

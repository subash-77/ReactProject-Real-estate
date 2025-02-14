import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import "../App.css";
import Companies from "./companies/companies";
import Residencies from "./Residencies/Residencies";
import Value from "./Value/Value";
import Contact from "./Contact/Contact";
import GetStrated from "./GetStrated/GetStrated";
import Footer from "./Footer/Footer";
function ComponentLoading() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStrated/>
      <Footer/>
    </div>
  );
}

export default ComponentLoading;
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import "./App.css";
// import Companies from "./components/companies/companies";
// import Residencies from "./components/Residencies/Residencies";
// import Value from "./components/Value/Value";
// import Contact from "./components/Contact/Contact";
// import GetStrated from "./components/GetStrated/GetStrated";
// import Footer from "./components/Footer/Footer";
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <div className="white-gradient" />
//         <Header />
//         <Hero />
//       </div>
//       <Companies />
//       <Residencies/>
//       <Value/>
//       <Contact/>
//       <GetStrated/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ComponentLoading from './components/ComponentLoading';
import Residencies from './components/Residencies/Residencies';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentLoading />} />
        <Route path='/residency' element={<Residencies/>} />
        
      </Routes>
    </Router>
  );
};

export default App;

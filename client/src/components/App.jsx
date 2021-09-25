import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login/Login";

const App = () => {
  
  const addDetails = (details) => {
    console.log(details);
  }

  return (
    <div>
      <Header />
      <Login onAdd={addDetails}/>
      <Footer />
    </div>
  );
};

export default App;

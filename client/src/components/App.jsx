import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login/Login";

const App = () => {
  const onClick = (details) => {
    console.log(details);
  };
  return (
    <div>
      <Header />
      <Login onAdd={onClick} />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Input from "./Input";


const Login = () => {

  function addItem(details) {
    console.log(details);
  }

  return (
    <div className="text-center mt-5 login-form">
      <form style={{ "max-width": "300px", margin: "auto" }}>
        <h1 className="h3 mb-3 font-weight-norma mt-3">Sign In</h1>
        <Input onAdd={addItem}/>
      </form>
      <h6 className="mt-3">Not signed up? <a href="/index">Sign up</a></h6>
    </div>
  );
};

export default Login;

import React from "react";

const Login = () => {
  return (
    <div className="text-center mt-5 login-form">
      <form style={{ "max-width": "300px", margin: "auto" }}>
        <h1 className="h3 mb-3 font-weight-norma mt-3">Sign In</h1>
        <input
          type="email"
          id="emailAddress"
          className="form-control"
          placeHolder="Email Address"
          required
          autoFocus
        />
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          placeHolder="password"
          required
          autoFocus
        />
        <div className="checkbox mt-3">
          <label>
            <input type="checkbox" value="Remember Me"/>
             Remember Me
          </label>
        </div>
        <div className="mt-3 d-grid gap-2">
          <button className="btn btn-lg btn-primary">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

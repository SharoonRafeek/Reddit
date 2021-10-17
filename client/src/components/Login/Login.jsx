import React, { useState } from "react";

const Login = (props) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const newName = event.target.name;
    const newValue = event.target.value;
    setDetails((prevValue) => {
      return { ...prevValue, [newName]: newValue };
    });
  }

  return (
    <div className="text-center mt-5 login-form">
      <form style={{ maxWidth: "300px", margin: "auto" }}>
        <h1 className="h3 mb-3 font-weight-norma mt-3">Sign In</h1>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter your email."
          value={details.email}
          required
          autoFocus
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter your Password"
          value={details.password}
          required
          autoFocus
        />
        <label>
          <input type="checkbox" value="Remember Me" />
          Remember Me
        </label>
        <div className="mt-3 d-grid gap-2">
          <button
            onClick={(event) => {
              props.onAdd(details);
              event.preventDefault();
            }}
            type="submit"
            className="btn btn-lg btn-primary"
          >
            Sign In
          </button>
        </div>
      </form>
      <h6 className="mt-3">
        Not signed up? <a href="/index">Sign up</a>
      </h6>
    </div>
  );
};

export default Login;

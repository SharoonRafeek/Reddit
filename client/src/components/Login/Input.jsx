import React, { useState } from "react";

const Input = (props) => {
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
    <div>
      <input
        onChange={handleChange}
        type="email"
        name="email"
        className="form-control"
        placeHolder="Enter your email."
        value={details.email}
        onAdd={details.email}
        required
        autoFocus
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        className="form-control"
        placeHolder="Enter your Password"
        value={details.password}
        onAdd={details.password}
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
    </div>
  );
};

export default Input;

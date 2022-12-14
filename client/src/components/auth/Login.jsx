import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

function Login({ login, isAuthenticated }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  // OnChange
  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // OnSubmit
  async function onSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  // Redirect if logged in
  if(isAuthenticated){
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => onChange(e)}
            placeholder="Email Address"
            name="email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </>
  );
}

const mapStateToProps = (state) =>({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);

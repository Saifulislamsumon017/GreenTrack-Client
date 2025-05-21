import React from 'react';

const Login = () => {
  return (
    <div className="max-w-sm mx-auto my-[50px] shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-Rancho text-center">Sign In Now!</h1>
        <form className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

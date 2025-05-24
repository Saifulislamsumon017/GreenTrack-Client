import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const { sinInUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      toast.warning('Please fill out both fields.');
      return;
    }

    sinInUser(email, password)
      .then(result => {
        console.log(result);
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch('https://green-track-server.vercel.app/users', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(signInInfo),
        })
          .then(res => res.json())
          .then(() => {
            toast.success('Logged in successfully and user info updated!');
            navigate('/');
          })
          .catch(() => {
            toast.warning('Login successful, but failed to update user info.');
            navigate('/');
          });
      })
      .catch(error => {
        console.error('Firebase sign-in error:', error);
        toast.error(`Login failed: ${error.message}`);
      });
  };

  const handelGoogleLogIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log('Google user:', user);

        const userProfile = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          creationTime: user.metadata?.creationTime,
          lastSignInTime: user.metadata?.lastSignInTime,
        };

        return fetch('https://green-track-server.vercel.app/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userProfile),
        });
      })
      .then(res => {
        if (!res.ok) throw new Error('Failed to save user data');
        return res.json();
      })
      .then(() => {
        toast.success('Google login successful!', { autoClose: 3000 });
        navigate('/');
      })
      .catch(error => {
        console.error('Login error:', error);
        toast.error(`Login error: ${error.message}`, {
          autoClose: 4000,
        });
      });
  };

  return (
    <div className="py-[50px]">
      <div className="max-w-sm mx-auto shrink-0 shadow-2xl bg-base-100 dark:bg-green-950 text-black dark:border rounded-2xl dark:text-white transition">
        <div className="card-body">
          <h1 className="text-5xl font-Rancho text-center">Sign In Now!</h1>
          <form
            onSubmit={handleSignIn}
            className="fieldset flex flex-col gap-3"
          >
            {/* Email */}
            <label className="label text-black dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered bg-transparent dark:bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/70
            focus:outline-none"
              placeholder="Email"
            />

            {/* Password */}
            <label className="label text-black dark:text-white">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered bg-transparent dark:bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/70
            focus:outline-none"
              placeholder="Password"
            />

            <div>
              <a className="link link-hover text-sm dark:text-white/80">
                Forgot password?
              </a>
            </div>

            <button
              className="btn font-Rancho text-2xl mt-4 bg-green-900 text-white border-none 
             dark:bg-white dark:border dark:border-white 
             dark:text-green-900 transition"
            >
              Log In
            </button>
            <button
              onClick={handelGoogleLogIn}
              className="btn font-Rancho text-2xl mt-4 bg-green-900 text-white border-none 
             dark:bg-white dark:border dark:border-white 
             dark:text-green-900 transition"
            >
              <FcGoogle />
              Login with Google
            </button>
            <p className="text-black dark:text-white text-sm mt-3 mb-4">
              Don’t have an account?{' '}
              <Link to="/register" className="text-indigo-500">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

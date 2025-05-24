import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router';

const Register = () => {
  const { createUser, googleSignIn, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // const handleSignUp = e => {

  //   e.preventDefault();
  //   const form = e.target;
  //   const formData = new FormData(form);

  //   const { email, password, name, ...restFormData } = Object.fromEntries(
  //     formData.entries()
  //   );

  //   // Password validation
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  //   if (!passwordRegex.test(password)) {
  //     toast.error(
  //       'Password must be at least 6 characters and include uppercase and lowercase letters.'
  //     );
  //     return;
  //   }

  //   createUser(email, password)
  //     .then(async result => {
  //       console.log(result);
  //       if (result.user) {
  //         updateUser({ displayName: name, photoURL: photoURL })
  //           .then(() => {
  //             setUser({ ...user, displayName: name, photoURL: photoURL });
  //           })
  //           .catch(error => {
  //             console.log(error);
  //             setUser(user);
  //           });
  //       }

  //       const userProfile = {
  //         email,
  //         name,
  //         photo: restFormData.photo || null,
  //         ...restFormData,
  //         creationTime: result.user?.metadata?.creationTime,
  //         lastSignInTime: result.user?.metadata?.lastSignInTime,
  //       };

  //       fetch('https://green-track-server.vercel.app/users', {
  //         method: 'POST',
  //         headers: {
  //           'content-type': 'application/json',
  //         },
  //         body: JSON.stringify(userProfile),
  //       })
  //         .then(res => res.json())
  //         .then(data => {
  //           if (data.insertedId) {
  //             toast.success('Registration successful!');
  //             form.reset();
  //             navigate(location.state ? location.state : '/'); // Redirect to home
  //           } else {
  //             toast.warning('User saved but no ID returned.');
  //           }
  //         })
  //         .catch(() => {
  //           toast.error('Failed to save user data.');
  //         });
  //     })
  //     .catch(error => {
  //       toast.error(`Registration failed: ${error.message}`);
  //     });
  // };
  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formValues = Object.fromEntries(formData.entries());
    const { email, password, name, photo, ...restFormData } = formValues;

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must be at least 6 characters and include uppercase and lowercase letters.'
      );
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log(result);
        if (result.user) {
          const updatedProfile = {
            displayName: name,

            photoURL: photo,
          };

          updateUser(updatedProfile)
            .then(() => {
              setUser({
                ...result.user,
                displayName: name,
                photoURL: photo,
              });
            })
            .catch(error => {
              console.log(error);
              setUser(result.user); // fallback to default
            });
        }

        const userProfile = {
          email,
          name,
          photo: photo,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch('https://green-track-server.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userProfile),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              toast.success('Registration successful!');
              form.reset();
              navigate(location.state ? location.state : '/'); // Redirect to home
            } else {
              toast.warning('User saved but no ID returned.');
            }
          })
          .catch(() => {
            toast.error('Failed to save user data.');
          });
      })
      .catch(error => {
        toast.error(`Registration failed: ${error.message}`);
      });
  };
  const handelGoogleLogIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;

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
      <div className="card bg-base-100 dark:bg-green-950 max-w-sm mx-auto shrink-0 shadow-2xl text-black dark:text-white dark:border rounded-2xl transition">
        <div className="card-body">
          <h1 className="text-5xl font-Rancho text-center">Sign Up Now!</h1>
          <form
            onSubmit={handleSignUp}
            className="fieldset flex flex-col gap-3"
          >
            <label className="label text-black dark:text-white">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered bg-transparent dark:bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/70 focus:outline-none"
              placeholder="Name"
              required
            />

            <label className="label text-black dark:text-white">Address</label>
            <input
              type="text"
              name="address"
              className="input input-bordered bg-transparent dark:bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/70 focus:outline-none"
              placeholder="Address"
            />

            <label className="label text-black dark:text-white">Phone</label>
            <input
              type="text"
              name="phone"
              className="input input-bordered bg-transparent dark:bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/70 focus:outline-none"
              placeholder="Phone Number"
            />

            <label className="label text-black dark:text-white">Photo</label>
            <input
              type="text"
              name="photo"
              className="input input-bordered bg-transparent dark:bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/70 focus:outline-none"
              placeholder="Photo URL"
            />

            <label className="label text-black dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered bg-transparent dark:bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/70 focus:outline-none"
              placeholder="Email"
              required
            />

            <label className="label text-black dark:text-white">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered bg-transparent dark:bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/70 focus:outline-none"
              placeholder="Password"
              required
            />

            <div>
              <a className="link link-hover text-sm dark:text-white/80">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="btn font-Rancho text-2xl mt-4 bg-green-900 text-white border-none dark:bg-white dark:border dark:border-white dark:text-green-900 transition"
            >
              Sign up
            </button>

            <button
              onClick={handelGoogleLogIn}
              type="button"
              className="btn font-Rancho text-2xl mt-4 bg-green-900 text-white border-none dark:bg-white dark:border dark:border-white dark:text-green-900 transition flex items-center justify-center gap-2"
            >
              <FcGoogle />
              Login with Google
            </button>

            <p className="text-black dark:text-white text-sm mt-3 mb-4">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { Link, NavLink } from 'react-router';
import ImgLogo from '../Assests/GreenTrack Logo.png';

const Header = () => {
  return (
    <header>
      <div className="w-11/12 mx-auto flex justify-between items-center rounded-full px-4 lg:px-10 py-4 h-16 border border-white relative">
        <Link to="/">
          <div className="flex items-center">
            <img src={ImgLogo} alt="" className="w-10 h-10" />
            <h1 className="font-Rancho text-3xl font-bold">
              Green<span className="text-green-900">Track</span>
            </h1>
          </div>
        </Link>
        {/* Desktop Navigation Links */}
        <div className="hidden lg:block">
          <ul className="text-2xl font-Rancho space-x-5 flex">
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive
                    ? 'px-6 py-2 text-xl font-semibold text-green-900 border-2 border-green-900 rounded-full'
                    : 'text-green-950'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/all-plants'}
                className={({ isActive }) =>
                  isActive
                    ? 'px-6 py-2 text-xl font-semibold text-green-900 border-2 border-green-900 rounded-full'
                    : 'text-green-950'
                }
              >
                All Plants
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/add-plant'}
                className={({ isActive }) =>
                  isActive
                    ? 'px-6 py-2 text-xl font-semibold text-green-900 border-2 border-green-900 rounded-full'
                    : 'text-green-950'
                }
              >
                Add Plant
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/my-plants'}
                className={({ isActive }) =>
                  isActive
                    ? 'px-6 py-2 text-xl font-semibold text-green-900 border-2 border-green-900 rounded-full'
                    : 'text-green-950'
                }
              >
                My Plants
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="px-6 py-2 text-2sl font-Rancho font-semibold text-green-900 border-2 border-green-900 rounded-full hover:bg-green-900 hover:text-white transition-all ease-in-out">
            Log-In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home';
import AddPlant from '../Pages/AddPlant';
import AllPlant from '../Pages/AllPlant';
import MyPlants from '../Pages/MyPlants';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'all-plants',
        Component: AllPlant,
      },
      {
        path: 'add-plant',
        Component: AddPlant,
      },
      {
        path: 'my-plants',
        Component: MyPlants,
      },
      {
        path: 'Login',
        Component: Login,
      },
      {
        path: 'Register',
        Component: Register,
      },
    ],
  },
]);

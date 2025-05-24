import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home';
import AddPlant from '../Pages/AddPlant';
import AllPlant from '../Pages/AllPlant';
import MyPlants from '../Pages/MyPlants';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Loading from '../Components/Loading';
import PlantDetails from '../Components/PlantDetails';
import ErrorPage from '../Pages/ErrorPage';
import PrivetRoute from './PrivetRoute';
import UpdatePlant from '../Pages/UpdatePlant';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,

        Component: Home,
        hydrateFallbackElement: <Loading />,
        loader: () => fetch('https://green-track-server.vercel.app/plants'),
      },
      {
        path: '/plants/:id',
        // Component: PlantDetails,
        element: (
          <PrivetRoute>
            <PlantDetails />
          </PrivetRoute>
        ),
      },
      {
        path: 'all-plants',
        Component: AllPlant,
        hydrateFallbackElement: <Loading />,
        loader: () => fetch('https://green-track-server.vercel.app/plants'),
      },
      {
        path: 'add-plant',
        // Component: AddPlant,
        element: (
          <PrivetRoute>
            <AddPlant />
          </PrivetRoute>
        ),
      },
      {
        path: 'updated-plant/:id',
        Component: UpdatePlant,
        hydrateFallbackElement: <Loading />,
        loader: ({ params }) =>
          fetch(`https://green-track-server.vercel.app/plants/${params.id}`),
      },

      {
        path: 'my-plants',
        // Component: MyPlants,
        element: (
          <PrivetRoute>
            <MyPlants />
          </PrivetRoute>
        ),
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

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
import DashboardLayout from '../Layout/DashboardLayout';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';

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
        path: 'about',
        Component: AboutUs,
      },
      {
        path: 'contact',
        Component: ContactUs,
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
        path: 'Login',
        Component: Login,
      },
      {
        path: 'Register',
        Component: Register,
      },
    ],
  },

  {
    path: 'dashboard',
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),

    children: [
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
        path: 'my-plants',
        // Component: MyPlants,
        element: (
          <PrivetRoute>
            <MyPlants />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

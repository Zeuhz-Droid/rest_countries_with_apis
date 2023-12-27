import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Countries, { loader as countriesLoader } from "./components/Countries";
import CountryDetail, {
  loader as countryDetailLoader,
} from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/:query?",
        element: <Countries />,
        loader: countriesLoader,
        errorElement: <p>Error...</p>,
      },
      {
        path: "/country/:countryName?",
        element: <CountryDetail />,
        loader: countryDetailLoader,
        errorElement: <p>This one no work.</p>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

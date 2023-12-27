import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Countries, { loader as countriesLoader } from "./components/Countries";
import CountryDetail, {
  loader as countryDetailLoader,
} from "./components/CountryDetail";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/:query?",
        element: <Countries />,
        loader: countriesLoader,
        errorElement: <Error type="countries" />,
      },
      {
        path: "/country/:countryName?",
        element: <CountryDetail />,
        loader: countryDetailLoader,
        errorElement: <Error type="countryDetail" />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

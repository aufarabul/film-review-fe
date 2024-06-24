import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navbar>
        <HomePage />
      </Navbar>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginPage />
      </>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

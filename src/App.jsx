import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <HomePage />
        </>
      ),
    },
    {
      path: "/login",
      element: <Navbar />,
    },
  ]);

  return (
    // We will use the store (temporary database)
    <>
      <RouterProvider router={router} />
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;

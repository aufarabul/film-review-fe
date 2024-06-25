import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return (
    // We will use the store (temporary database)
    <Provider store={store}>
      <div className="container">
        <RouterProvider router={router} />
      </div>

      <ToastContainer theme="colored" />
    </Provider>
  );
}

export default App;

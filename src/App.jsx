import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DetailFilm from "./pages/DetailFilmPage";

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
    {
      path: "/film/:id",
      element: (
        <>
          <Navbar />
          <DetailFilm />
        </>
      ),
    },
  ]);

  return (
    // We will use the store (temporary database)
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer theme="colored" />
    </Provider>
  );
}

export default App;

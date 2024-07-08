import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Register from "./components/Register";
import ReactDOM from "react-dom/client";
import Show from "./components/Show";
import Update from "./components/Update";

var projectRoute = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "show",
        element: <Show></Show>,
      },
      {
        path: "update",
        element: <Update></Update>,
      },
    ],
  },
]);

var ans = ReactDOM.createRoot(document.getElementById("root"));
ans.render(<RouterProvider router={projectRoute}></RouterProvider>);

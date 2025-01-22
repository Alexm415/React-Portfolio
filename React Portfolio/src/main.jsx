import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutme from "./Pages/Aboutme.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Resume from "./Pages/Resume.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "aboutme",
        element: <Aboutme />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

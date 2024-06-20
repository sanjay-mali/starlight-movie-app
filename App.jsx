import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/componets/Header";
import Body from "./src/componets/Body";
import Footer from "./src/componets/Footer";
import Trending from "./src/componets/Trending";
import Tvshow from "./src/componets/Tvshow";
import Movie from "./src/componets/Movie";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Search from "./src/componets/Search";



function App() {
  console.log('Heloooooooooooo')
    return (
    <div>
      <Header />
      <Outlet />
      {/* <Pagination /> */}
      <Footer />
      
    </div>
  );
}
const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Movie />,
        },
        {
            path: "/trending",
            element: <Trending />,
        },
        {
            path: "/tvshow",
            element: <Tvshow />,
        },
        {
            path: "/movie",
            element: <Movie />,
        },
        {
            path: "/search",
            element: <Search />,
        },
    ],
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

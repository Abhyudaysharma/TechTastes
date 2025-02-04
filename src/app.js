import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from  "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> {/* it auto filled the path of the route of the page  */}
      
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/About",
        element: <About />,
    
      },
      {
        path: "/contact",
        element: <Contact />,
      } ,
      {
        path: "/restaurants/:resId",
        element:<RestaurantMenu/>
      },
    ],
    errorElement:<Error />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter} />);

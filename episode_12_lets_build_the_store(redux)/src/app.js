import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import Footer from "./components/Footer";
import UserContext from "./utils/userContext";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// RestaurantList is JSON Data for displaying cards
// RestaurantList is JSON Data for displaying cards

const AppLayout = () => {
  const [userName, setUserName] = useState();
  //authentication logic
  useEffect(() => {
    const data = {
      name: "Tanishq Kadam",
    };
    setUserName(data.name);
  });

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedUser:userName}}> 
      <div className="app">
        <Header />
        <Outlet /> {/**childresn will be replaced here according to url-path*/}
        <Footer />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render--> reacteleme which is object and after it gets converted to html ele
root.render(<RouterProvider router={appRouter} />); //rendering functional component.

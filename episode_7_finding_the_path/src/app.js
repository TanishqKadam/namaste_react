
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import About from './components/About';
import Contactus from './components/Contactus';
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu';


// RestaurantList is JSON Data for displaying cards
// RestaurantList is JSON Data for displaying cards

const AppLayout = ()=>{
  return (
  <div className='app'>
    <Header/>
    <Outlet/> {/**childresn will be replaced here according to url-path*/}
  </div>);
};

const appRouter = createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contactus',
        element:<Contactus/>
      },
      {
        path:'/restaurant/:resId',
        element:<RestaurantMenu/>
      }
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render--> reacteleme which is object and after it gets converted to html ele 
root.render(<RouterProvider router={appRouter}/>);//rendering functional component.

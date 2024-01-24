
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';

// RestaurantList is JSON Data for displaying cards
// RestaurantList is JSON Data for displaying cards

const AppLayout = ()=>{
  return (
  <div className='app'>
    <Header/>
    <Body/>
  </div>);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render--> reacteleme which is object and after it gets converted to html ele 
root.render(<AppLayout/>);//rendering functional component.

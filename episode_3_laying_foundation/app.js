
import React from 'react';
import ReactDOM from 'react-dom';

//JSX--> JS syntax where we can merge html and JS together
//jsx is not html inside JS 
//jsx is html like syntax
//react element
const title =(<h1 className='head'>namasste react from title compoent</h1>);

//getting root ele
const root = ReactDOM.createRoot(document.getElementById('root'));

//react compnents.
//functional component-: which is nothing but JS function which returns JSX.
const HeadingComponent = () =>{
   return (
  <div id='container'>
   {title} 
    <h1 className='heading'>namaste react functional component Euuu</h1>
  </div>);
};

//root.render--> reacteleme which is object and after it gets converted to html ele 
root.render(<HeadingComponent/>);//rendering functional component.

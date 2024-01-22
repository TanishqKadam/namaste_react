/* 
create strut like in react 
<div id='parent'>
  <div id='child'>
   <h1> i am h1 tag </h1>
   <h2> i am h2 tag </h2>
  </div>
  <div id='child'>
   <h1> i am h1 tag </h1>
   <h2> i am h2 tag </h2>
  </div>
</div>
*/

import React from 'react';
import ReactDOM from 'react-dom';
const parent = React.createElement('div',{id:'parent'},[React.createElement('div',{id:'child'},
[React.createElement('h1',{},'i am h1 tag'),
React.createElement('h2',{},'i am h2 tag')]),React.createElement('div',{id:'child'},
[React.createElement('h1',{},'i am h1 tag'),
React.createElement('h2',{},'i am h2 tag')])]);

    const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(heading);//JS obejct which includes props nad children.
  
root.render(parent);//job of render is create that h1 tag and put it inside of root or in dom
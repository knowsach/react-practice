import React from 'react';

const Greet = (props) =>{
  console.log('prop value: ', props);  // consoling the data , that we have received...
return (
  <div>
<h1> Hello  {props.name} from the other side....</h1>
<input placeholder="enter something"></input>

</div>
)
};

export default Greet ;
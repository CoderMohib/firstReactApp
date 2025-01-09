// Create a component that takes an array of fruits (['Apple', 'Banana', 'Cherry']) as props and displays each fruit as a list item in an unordered list (<ul>).

import { Fragment } from "react";

function Show({fruits}){
    return(
      <ul>
          {
            fruits.map((fruit,index)=>
            (<li key={index}>
              {fruit}</li>)
            )
          }
      </ul>
    );
}

export default function MyNew(){
  const ch = ['Apple', 'Banana', 'Cherry'];
  return(
    <Fragment>
      <Show fruits={ch} />
    </Fragment>
  )
}
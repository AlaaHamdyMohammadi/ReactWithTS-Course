import React from 'react'
import Child from './Child'

export default function Parent() {
  return (
    <div>
      Parent
      <Child color="brown" handlerClick={() => {console.log('Click me')}} />
    </div>
  );
}

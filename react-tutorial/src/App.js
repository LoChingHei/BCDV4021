
import './App.css';
import React from 'react';

function MyComponent(){
  const element = <h1>hello, JSX</h1>
  const handleClick = () => alert("Hello!");
  return <>
      <h1>Hello, React</h1>
      {element}
      <button onClick={handleClick}>Click Me</button>
    </>;
}

export default MyComponent;

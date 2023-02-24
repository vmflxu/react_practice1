import React from 'react'
import Child from 'Child'

function App() {
  // const testObj = {
  //   name: 'wonjang',
  //   age: 21,
  //   company: 'Sparta'
  // }
  // const {name,age,company} = testObj;
  // console.log(name);
  // console.log(age);
  // console.log(company);
  
  const name = 'test';
  return (
    <Child
      // age={21}
      name={name}>
      이름
    </Child>
  );
}


export default App
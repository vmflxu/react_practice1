import React, { useState } from 'react'
import "App.css"
import Button from "components/Button"
import User from "components/User"


function App() {

  const [users, setUsers] = useState(
    [
      { id: 1, age: 30, name: '송중기' },
      { id: 2, age: 24, name: '송강' },
      { id: 3, age: 21, name: '김유정' },
      { id: 4, age: 29, name: '구교환' },
    ]
  );

  const [name, setName] = useState('');
  const [age, setAge] = useState('');


  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  }

  const addClickButtonHandler = () => {
    let temp = {
      id: users.length,
      age: age,
      name: name,
    }
    setUsers([...users, temp]);

    setName('');
    setAge('');
  }
  const removeClickButtonHandler = (id) => {
    const removedArr = users.filter((element) => element.id !== id);
    setUsers(removedArr);
  }

  return (
    <div>
      <div>
        이름 : &nbsp; <input value={name} onChange={nameChangeHandler} /> &nbsp;{name} <br />
        나이 : &nbsp; <input value={age} onChange={ageChangeHandler} /> &nbsp;{age} <br />
        <Button add={addClickButtonHandler}>추가하기</Button>

      </div>
      <div className="app-style">
        {users.map((element) => {
          return <User key={element.id} item={element} remove={removeClickButtonHandler} />;
        })}
      </div>
    </div>
  );
}
// const User = ({key, item, remove}) => {
//   return (
//     <div key={item.id} className='component-style'>
//       {item.age} - {item.name}&nbsp;<br />
//       <span className="erase" onClick={() => remove(item.id)}>🗑</span>
//     </div>
//   )
// }

export default App
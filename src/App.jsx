import React, { useState } from 'react'
import "App.css"

function App() {


  let [user,setUser] = useState(['','']);
  const detectChangeID = (e) =>{
    user[0] = e.target.value;
    user = [...user];
    setUser(user);
  }
  const detectChangePW = (e) =>{
    user[1] = e.target.value;
    user = [...user];
    setUser(user);
  }
  return (
    <div>
      아이디: <input type="text" value={user[0]} onChange={detectChangeID}></input>
      <br />
      비밀번호: <input type="password" value={user[1]} onChange={detectChangePW}></input>
      <br />
      <button onClick={() => {
        alert(`
        고객님이 입력하신 아이디는 ${user[0]}이며,
        비밀번호는 ${user[1]}입니다.
        `)
        setUser(['','']);
      }}
      >로그인</button>
    </div>
  );
}

export default App
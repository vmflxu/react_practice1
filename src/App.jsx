import React, { useState } from 'react'
import "App.css"

function App() {

  // hook : 어떠한 기능을 하는 함수
  // useState('initial Value');
  // ==> [state, setState] 이런 배열을 리턴해줌
  // 이걸 구조분해할당으로
  // {state, setState} = userState('initial Value');
  
  // userState, useEffect, useContext, useMemo 이런 훅들이 있음.
  // useDispatch, use~~~ 많음.



  let one = {
    title : "title1 by Object",
    content : "content1 by Object"
  }
  let two = {
    title : "title2 by Object",
    content : "content2 by Object"
  }
  let three = {
    title : "title3 by Object",
    content : "content3 by Object"
  }
  const [each,setEach] = useState([one,two,three]);

  // const change = () =>{
  //   three.content = "글3은 한글로 변한다."
  //   console.log(three);
  // }
  
  const changeByState = () => {
    three.content = "글3은 한글로 변한다."
    setEach([one,two,three]);
  }

  return (
    <div>
      <div className='frame'>
        <div className="bg-black">
          <h1>{each[0].title}</h1>
          <div className='bg-white'>
            <h4>{each[0].content}</h4>
          </div>
        </div>
        <div className="bg-black">
          <h1>{each[1].title}</h1>
          <div className='bg-white'>
          <h4>{each[1].content}</h4>
          </div>
        </div>
        <div className="bg-black">
          <h1>{each[2].title}</h1>
          <div className='bg-white'>
          <h4>{each[2].content}</h4>
          </div>
        </div>
      </div>
      <button onClick={changeByState}>버튼을 누르면 content3가 변해야함</button>
    </div>
  );
}

export default App
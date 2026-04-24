

import {useState} from "react"; 

function App() {

  const [firstName,setFirstName]=useState('İbrahim');
  const [lastName, setLastName]=useState("PETEK")
  const [userInfo,setUserInfo]=useState({username:"ibrhmptk",password:"123"})
  const [show,setShow]=useState(true)
  const [count,setCount]=useState(0)

  const arttir =()=>{
    setCount(count+1)
    console.log("Component render edildi")
  }

  const azalt=()=>{
    if(count>0){setCount(count-1)}
    
  }

  return (
    <div>
     
     {userInfo.username} {userInfo.password}
     <hr></hr>
     {show ? <div> {userInfo.username} {userInfo.password} </div>: "bilgiler gizli" }
     <hr></hr>

     <div>
      <button onClick={arttir}>Arttır</button>
     </div>

     <div>
      {count}
     </div>

     <div>
      <button onClick={azalt}>Azalt</button>
     </div>
     
     <div>
      
     </div>
    </div>
  );
}

export default App;

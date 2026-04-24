import { useDebugValue, useState,useEffect} from "react";
import Example from "./Example";

function App() {
  const [vize1, setVize1] = useState("");
  const [vize2, setVize2] = useState("");
  const [ortalama,setOrtalama]=useState("");

  const ortalamaBul=()=>{
    debugger
    const sonuc = (Number(vize1)+Number(vize2))/2;
    setOrtalama(sonuc)

  }

  return (
    <div>
      <div>
        <input
          type="number"
          value={vize1}
          onChange={(e) => setVize1(Number(e.target.value))}
        ></input>
      </div>

      <div>
        <input
          type="number"
          value={vize2}
          onChange={(e) => setVize2(Number(e.target.value))}
        ></input>
      </div>

      <div>
        <button onClick={ortalamaBul}>Ortalama bul</button>
      </div>

     <p>Ortalama:{ortalama} </p>


     <hr></hr>

     <Example />



    </div>

  );
}

export default App;

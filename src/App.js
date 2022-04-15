import React ,{useState} from 'react'
import "./style.css";

export default function App() {
  const[input,setInput]=useState("");
  const[result,setResult]=useState(0);
  const handler=e=>{
    setInput(e.target.value)
  }

  const Calculate=()=>
  {
    if(input.trim()==="")
    {
      setResult(0)
    }
    else{
     setResult(eval(input))
    }
  }

  const Clear=()=>{
    setInput("")
    setResult(0)
  }

  const backspace=()=>{
    setInput(input.substring(0,input.length-1))
  }
  return (
    <div>
      <center>
        <br/>
        <input style={{height:"40px",width:"180Px"}}type="text" name="input" value={input} placeholder="Enter the math claculations"
        onChange={handler}/>
        <br/><br/>
        <h2> The Result is : {result} </h2>

        <button onClick={()=>setInput(input+"1")}>1</button>
        <button onClick={()=>setInput(input+"2")}>2</button>
        <button onClick={()=>setInput(input+"3")}>3</button>
        <button onClick={backspace}><i class="fas fa-backspace"></i></button><br/>
        <button onClick={()=>setInput(input+"4")}>4</button>
        <button onClick={()=>setInput(input+"5")}>5</button>
        <button onClick={()=>setInput(input+"6")}>6</button>
        <button onClick={Clear}> Cls </button><br/>
        <button onClick={()=>setInput(input+"7")}>7</button>
        <button onClick={()=>setInput(input+"8")}>8</button>
        <button onClick={()=>setInput(input+"9")}>9</button>
        <button onClick={()=>setInput(input+"*")}>*</button><br/>
        <button id="zero" onClick={()=>setInput(input+"0")}>0</button>
        <button onClick={()=>setInput(input+"/")}>/</button>
        <button onClick={()=>setInput(input+"%")}>%</button><br/>
        <button onClick={()=>setInput(input+"+")}>+</button>
        <button onClick={()=>setInput(input+"-")}>-</button>

        <button className="result" onClick={Calculate}>=</button><br/>
      </center>
    </div>
  )
}


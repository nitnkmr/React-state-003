import './App.css';
import Input from './Input';
import { useState } from 'react';

function App() {
  const [Uppercase, setUppercase] = useState(true)
  let [length, setlength] = useState("")
  const [Lowercase, setLowercase] = useState(true)
  const [Number, setNumber] = useState(true)
  const [Symbols, setSymbols] = useState(true)
  const [required,setRequired]=useState("")
  const [password,setpassword]=useState("")
  const [dispPass, setdispPass] = useState("")
  const [valid, setvalid]=useState(false)
  const [button, setbutton]=useState(false)

const uppercaseSet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseSet ='abcdefghijklmnopqrstuvwxyz';
const numberSet ='1234567890';
const symbolSet ='!@#$%^&*().,';


  function upper(ele){
    console.log("1",ele);
    ele?setRequired(required+"1"):setRequired(required.replace(new RegExp("1","g"),""))
    setUppercase(!ele)
  }
  function lower(ele){
    ele?setRequired(required+"2"):setRequired(required.replace(new RegExp("2","g"),""))
    console.log("2",ele);
    setLowercase(!ele)
  }
  function num(ele){
    ele?setRequired(required+"3"):setRequired(required.replace(new RegExp("3","g"),""))
    console.log("3",ele);
    setNumber(!ele)
  }
  function sym(ele){
    ele?setRequired(required+"4"):setRequired(required.replace(new RegExp("4","g"),""))
    console.log("4",ele);
    setSymbols(!ele)
  }
  function takeNumber(e){
    setlength(e.target.value)
    
    console.log(length);

  }
  function genPass(){

    if(required!==""){
    let set=""
    if(required.includes("1")){
      for(let i=0;i<Math.floor(length/required.length);i++){

      set+=uppercaseSet.charAt(Math.floor(Math.random()*uppercaseSet.length))
      }
    }
    if(required.includes("2")){
      for(let i=0;i<Math.floor(length/required.length);i++){

      set+=lowercaseSet.charAt(Math.floor(Math.random()*26))
      }
    }
    if(required.includes("3")){
      for(let i=0;i<Math.floor(length/required.length);i++){

      set+=numberSet.charAt(Math.floor(Math.random()*9))
      }
    }
    if(required.includes("4")){

      for(let i=0;i<Math.floor(length/required.length);i++){
        set+=symbolSet.charAt(Math.floor(Math.random()*symbolSet.length))
      }
      console.log(password);
      
    }
    setpassword(set);
    setdispPass(password)
    setvalid(false);

  }
  else{
    setvalid(true)
    console.log("intersome thing");
  }
  }
  function DisplayPassword(e){
    setdispPass(e.target.value)
    
  }
  

   

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(dispPass);
}
  

  
  return (
    <div className="App">
      <div className="container">

      <div><input type="text"  value={dispPass}  onChange={DisplayPassword} /><button className='copy' onClick={copyToClipboard}>Copy</button></div>
      <Input type={"Uppercase Character"} func={upper} origin={Uppercase} key={0}/>
      <Input type={"Lowercase Character"} key={1} func={lower} origin={Lowercase}/>
      <Input type={"Numbers Included"} origin={Number} func={num} key={2}/>
      <Input type={"Symbols Included "} origin={Symbols} func={sym} key={3}/>
      <label htmlFor="input"> Password Length
        <input type="number" value={length}  onChange={takeNumber}/>
        <div>
        <button className='gen' onClick={genPass}>Generate Password</button>
        </div>
      </label>
      {(valid)?<div>Choose any one Option and Enter The length</div>:null}
      </div>
    </div>

  );
}

export default App;

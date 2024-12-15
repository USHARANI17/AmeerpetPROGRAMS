/*let h2=document.createElement("h2");
h2.innerHTML="<marquee> welcome tto my world</marquee>";
document.getElementById("root").appendChild(h2);*/
//let React=require('react');
//let ReactDOM=require('react-dom');
//ReactDOM.render(<h1>WELCOME TO REACT</h1>,
//document.getElementById('root'),
//()=>{
  //console.log("rendering completed");
//}
//)

/*import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<h1>WELCOME TO REACT</h1>,
  document.getElementById('root'),
)*/
/*import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render([<h1><marquee>REACT DOM </marquee></h1>,<h1>first message</h1>,<h2>second message</h2>,<p>hloo</p>],document.getElementById('root'))*/
/*import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<div>
    <h1>1.one</h1>
    <h2>2.two</h2>
    <h3>3.three</h3>
    <p>hloooo</p>
</div>,
document.getElementById('root')
)*/
/*import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(//<React.Fragment>
   <> <h1>1.one</h1>
    <h2>2.two</h2>
    <h3>3.three</h3>
    <p>hloooo</p></>,//</React.Fragment>,
document.getElementById('root'))*/
//==============================
/*import React from 'react';
import ReactDOM from 'react-dom/client';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>heloo</h1>)*/
//=======================
/*import React from 'react';
import ReactDOM from 'react-dom/client';                                                                                                      
ReactDOM.createRoot(document.getElementById('root')).render(<>
<h1>welcome to ameerpet technologies</h1>
<h2>React class</h2>
<h3>started at 10:30Am</h3>
</>);*/
//===========================
/*import React from 'react';
import ReactDOM from 'react-dom/client';
let name="hero";
ReactDOM.createRoot(document.getElementById('root')).render(<>
<h1>hallo mr.{name}</h1>
<h1>Good Morning {name}</h1>
</>)*/
//===========================
/*import React from 'react';
import ReactDOM from 'react-dom/client';
let a=10;
let b=20;
 let c=a+b;
ReactDOM.createRoot(document.getElementById('root')).render(<>
<h1>Addition</h1>
<h1>sum of {a} and {b} is : {c} </h1> 
</>)*/
//===========================
/*import React from 'react';
import ReactDOM from 'react-dom/client';
let name='hero';
let name1='heroine';
ReactDOM.createRoot(document.getElementById('root')).render(<>
<h1>{name1}: hi,{name}</h1>
<h1>{name} : hello,{name1}</h1>
<p>{name1}: What was yesterday's bill ?</p>
<p>{name} : It was 100Rs for coffee,300 Rs for KFC, 500 Rs for miscellaneous expenses.</p>
<p>{name1} : okay,the total you spent was: 900 Rs</p>
</>)*/
//======================================
/*import React from 'react';
import ReactDOM from 'react-dom/client';
let fname="ameerpet";
let lname="technologies";
ReactDOM.createRoot(document.getElementById('root')).render(<>
<h> Hello, {fname} {lname}</h>
<p> Hello, {fname+" "+lname}</p>
<p>{`Hello, ${fname} ${lname}`}</p>
</>)*/
//=========================================
/*import React from 'react';
import ReactDOM from 'react-dom/client';
const cd=new Date();
ReactDOM.createRoot(document.getElementById('root'))
.render(<>
<h1>{`MY interview on ${cd.getDate()}:${cd.getMonth()+1}:${cd.getFullYear()} in wipro`}</h1>
<h1>{`My interview  is on ${cd.toLocaleDateString()}`}</h1>
<h1>{`My interview is on ${cd.toDateString()}`} </h1>
<h1>{`I should reach there by ${cd.getHours()}:${cd.getMinutes()}:${cd.getSeconds()}`}</h1>
</>);*/
//====================================
/*import React from 'react';
import ReactDOM from 'react-dom/client';
let name="ameerpet";
ReactDOM.createRoot(document.getElementById('root')).render(<>
<h1 contentEditable='true'>{name}</h1>
</>)*/
//=========================================
/*import React from 'react';
import ReactDOM from 'react-dom/client';
let add="https://picsum.photos/id/237/536/354";
ReactDOM.createRoot(document.getElementById('root')).render(<>
<img src={add} alt="img"></img>
</>)*/
//==============================
//DATE: 24/6/2024( Monday)
//EXternal CSS
/*import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
ReactDOM.createRoot(document.getElementById('root')).render(<>
<h1>HEllo,welcome to react</h1>
<div className="imagediv">
  <img src="https://picsum.photos/id/77/450/300" alt="imagelorem"></img>
</div>
<p id="pid">jhdsghjuytrdx njuytfcvbhtdcbnhytfcbnhytfcvbgtdcvgtdcvbgfc
</p>
</>)*/
//============================================
//Internal CSS

/*import ReactDOM from 'react-dom/client';
import "./index.css";
const universal={
  margin:0,
  padding:0
}
const elementStyle={
  color:"rgb(0,255,0)",
  backgroundColor:"#ffff00"
}
const imgdiv={
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}
const pId={
  color:"red",
  backgroundColor:"yellow"
}
ReactDOM.createRoot(document.getElementById('root')).render(<><div style={universal}>
  <h1 style={elementStyle}>HEllo,welcome to react</h1>
  <div style={imgdiv}>
    <img src="https://picsum.photos/id/77/450/300" alt="imagelorem"></img>
  </div>
  <p style={pId}>jhdsghjuytrdx njuytfcvbhtdcbnhytfcbnhytfcvbgtdcvgtdcvbgfc
  </p>
  </div>
  </>)*/
  //======================================
  //inline CSS
/* import ReactDOM from 'react-dom/client';
import "./index.css";
ReactDOM.createRoot(document.getElementById('root')).render(<>
<h style={{
  color:"rgb(0,0,255)",
  backgroundColor:"#000000"
}}>WELCOME TO REACT</h>
</>)*/
//=========================================
/*import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
const Greeting=()=>{
const cd=new Date();
  let currentHours=cd.getHours();
if(currentHours<12){
  return 'HEllo,good moring'
}
 if(currentHours<15){
  return 'HELLO,Good Afternoon!';
  }
if(currentHours<19){
  return 'HELLO, Good Evening';
}
if(currentHours>19&&currentHours<24){
  return 'Good Night,sweet dreams!';
  }
}
const greetingMessage=Greeting();
const app=()=>{
return(<div className='usha'>{greetingMessage}
<div className="usha" style={{color:"#808080",backgroundColor:"ffffff"}}>
<h1>{message1}</h1>
</div>
<div className='usha' style={{color:"red",backgroundColor:"orange"}}>
  <h1>{message2}</h1>
</div>
<div className='usha' style={{color:"green",backgroundColor:"#0080ff"}}>
  <h1>{message3}</h1>
</div>
<div className='usha' style={{color:"rgb(0,0,255)",backgroundColor:"#000000"}}>
  <h1>{message4}</h1>
</div>
</div>);
}
ReactDOM.createRoot(document.getElementById('root')).render(<h>{app}</h>)
*/
/*import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
let text='';
let bgColor='';
let textColor='';
const Greeting=()=>{
const cd=new Date();
  let currentHours=cd.getHours();
if(currentHours<12){
  text ='good moring';
  bgColor="rgb(0,255,0)";
  textColor='red';
}
 else if(currentHours<15){
  text='Good Afternoon!';
  bgColor="black";
  textColor="silver";
  }
else if(currentHours<19){
  text='Good Evening';
  bgColor="blue";
  textColor="green";
}
else{
  text='Good Night,sweet dreams!';
  textColor="rgb(0,0,0)";
  bgColor="black";
  }
  return {text,textColor,bgColor};
}
const message=Greeting();
ReactDOM.createRoot(document.getElementById('root')).render(<>
<div className='usha' style={{backgroundColor:message.bgColor,color:message.textColor}}>
 <h1> Hello,<span>{message.text}</span></h1>
</div>
</>
);*/
//======================================
/*import React from 'react';
import ReactDOM from 'react-dom/client';
let message='';
let style={};
const cd=new Date();
if(cd.getHours()<12){
  message="good morning";
  style={
    color:"red",
    backgroundColor:"yellow"
  }
}
else if(cd.getHours()<15){
  message="good afternoon";
  style={
    color:"black",
    backgroundColor:"yellow"
  } 
}
else if(cd.getHours()<19){
  message="good evening";
  style={
    color:"white",
    backgroundColor:"yellow"
  }
}
else{
  message="good night";
  style={
    color:"blue",
    backgroundColor:"yellow"
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<>
<h1>Hello,<span style={style}>{message}</span></h1>
</>)*/
//==================================
//CLASS COP&& FUN COM
/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(<>
<App/>
</>
);*/
//REACT.STRICTMODE
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
<App/>
</React.StrictMode>
);




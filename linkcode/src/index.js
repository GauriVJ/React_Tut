import React from 'react';
import  ReactDOM  from 'react-dom';
import style from './index.css' //for external css
import Header from './Header';
import Footer from './Footer';
//for inline css
let headStyle = {
  color: 'purple',
  fontSize:'20px',
  textAlign: 'center'
  //use camelcase for css styling in react
}
let count = 10;
let imgsrc = "https://imgs.search.brave.com/hHw6yIgx91fqCijpZG4OFN-upgUtyLlDqkapDtvx6Oc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZy1y/ZXMuOWFwcHNkb3du/bG9hZGluZy5jb20v/c2cvcmVzL2pwZy8w/My9hYy83MjJhNzAw/ZWY2MWQzYjQxYjk3/YTBjYmE1NTdiLWIw/MTIuanBnP3gtb3Nz/LXByb2Nlc3M9c3R5/bGUvbXEyMDA"
//what is jsx javascript expression
let imgstyle = {
  width: '15%',
  height: '15%',
  alignSelf: 'center'
}
ReactDOM.render(
  <div style = {headStyle}>
<h1 align='center' >Welcome to Linkcode Technologies</h1>
<Header/>
<p align='center'>today is my day {Math.round(Math.random()*10)} learning react</p>
<img src={imgsrc} style={imgstyle}/>
<h3 align='center'>{`Today we are in ${count}`}</h3>
<Footer/>
</div>, 
document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const App = function () {
  return (
    <div>
      <Logo />
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  );
};

const Logo = function () {
  return <h1>⌚far away💼</h1>;
};
const Form=function(){
  return<div className="add-form">
    <h3>What do you need for a successful trip?😍</h3>
  </div>
}
const PackingList=function(){
  return <div className="list">List of item</div>
}
const Stats= function(){
  return <footer className="stats"> You have x items on your list y items have been packed(z%)</footer>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

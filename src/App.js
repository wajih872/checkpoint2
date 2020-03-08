import React from 'react';
import image from "./photo/logo.png.jpg"
import './App.css'
function App(){
  return(
    <div className="app" style={{border:"solid 1px black", maxWidth:"100vw"}}>
      <h1 className="title red">MyTitle</h1>
      <br />
      <img src={image} alt="img" />
      <br />
      <img src="/logo192.png" alt="img" />
    </div>
);
}
export default App;

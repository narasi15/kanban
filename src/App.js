import React, { useState } from 'react';
import "./App.css"
import image from "./kanbanBack.png"; 



function App() {
  const [list, setList] = useState(['Item 1', 'Item 2', 'Item 3'])
  const [height, setHeight] = React.useState(window.innerHeight);

  var dragged, listener;
  dragged = null;
  listener = document.addEventListener;
  
  const style = {
    textAlign: "center",
    maxWidth: "250px",
    margin: "0 auto",
    border: "4px solid #e6e6e6",
    padding: "40px 25px",
    marginTop: "50px", 
    float: 'left', 
    width: "50%"
  }

  const styleBack  = {
    backgroundImage:`url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center right", 
    height: height
  }

  listener("dragstart", (event) => {
    //console.log("start !");
    return dragged = event.target;
  });

  listener("dragover", function(event) {
    return event.preventDefault();
  });

  listener("drop", (event) => {
    event.preventDefault();
    console.log(event.target.className)

    if (event.target.className === "page") {
       
      dragged.parentNode.removeChild(dragged);
      return event.target.appendChild(dragged);
    }
  });

  return (
    
    <div className='main' style={styleBack}>
      <br></br>
    <h1>Kanban Board</h1>
    <div className='parent grid-parent' >
    
        <div className='page' style={style}>
          <h3 style={{color: 'darkblue'}}>TODO: </h3>
          <ul className="drop">
              {list.map((element, index) => (
                <li className='dropped-item' key={index} draggable >
                  {element}
                </li>
              ))}
          </ul>
        </div>
    
    
        <div className='page' style={style}>
              <h3 style={{color: 'darkslategray'}}>IN PROGRESS: </h3>
              <ul className="drop">
              </ul>
        </div>
    
    
        <div className='page' style={style}>
              <h3 style={{color: 'darkslateblue'}}>DONE: </h3>
              <ul className="drop">
              </ul>
        </div>

    </div>
    </div>
    
  );
}

export default App;

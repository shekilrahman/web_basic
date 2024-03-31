import './App.css';
import { useState } from 'react';

let player = "x";
 
export default function App() {

    function indic(){
      document.getElementById("indicate").value = "Next to play : "+{player} ;
    }

  return (
      <>

        <div id='main'>
          <h1 id='indicate'>Next to play :{player}</h1>
          <div>
            <Square />
            <Square />
            <Square />
          </div>
          <div>
            <Square />
            <Square />
            <Square />
          </div>
          <div>
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </>
  );
}

function Square() {
    const [value,setValue] = useState("-");
    const [played,setStat] = useState(false);

    function changeText(){
      if(played != true){
        setValue(player);
        setStat(true);
        indic();
        player = player=='x'?'o':'x';
      } 
    }

    return (
      <button className='Square' onClick={changeText}>
        {value}
      </button>
    );
  }


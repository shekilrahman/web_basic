import './App.css';

export default function App() {
  return (
    <div className="App">

      <div>
        <TButton tab="1"/>
        <TButton tab="3"/>
        <TButton tab="2"/>
      </div>

    </div>
  );
}

function TButton([{tab}]){
  return (
      <button className='togBtn' >
        hi
      </button>

  );

}


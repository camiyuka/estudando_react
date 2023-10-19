
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const name= "yukari";
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Camila"/>
      <SayMyName nome="Carol"/>
      <SayMyName nome="Diogo"/>
      <SayMyName nome={name}/>
      <Pessoa nome= "Rodrigo" idade="20" profissao="programador" foto="https://viaplaceholder.com/150"/>
    </div>
  );  
}

export default App;

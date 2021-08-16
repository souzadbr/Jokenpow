
import './App.css';
import React from 'react'
import Header from './componentes/header';
import Jogada from './componentes/escolha';
import Jogo from './componentes/jogo';
import Pontos from './componentes/pontos';
import botaoEnviar from './componentes/butao';
function App() {
  return (
   
   <div className="App">

   <div className = "App1">
   <Header/>
   </div> 

  <div className = "segundafrase">
   <Jogada/>
  </div> 
  
   
   <div className = "imagem">
   <Jogo/> 
   </div>

   <div>
     <Pontos/>
   </div> 
   
<div>
  <button>
    Resete
  </button>
</div>
</div>



  
  );
}

export default App;

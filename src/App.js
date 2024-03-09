import imageRickMorty from "./img/rick-morty.png";
import './App.css';
import { useState } from "react";
import './components/Characters'
import Characters from "./components/Characters";

function App() { 

  const [characters,setCharacter] = useState(null);
  const reqApi = async()=>{
   const api = await fetch('https://rickandmortyapi.com/api/character')
   const characterApi = await api.json();
   //console.log(characterApi);
   setCharacter(characterApi.results)
  };
 //console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
     <h1 className='title'>Rick & Morty</h1>
     {characters ? (
    <Characters characters={characters} setCharacter={setCharacter}/>

     ) : (
      <>
      <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
      <button onClick={reqApi} className="btn-search">Buscar Personagem</button>
      </>
     )}
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import GlobalApi from './GlobalApi';
import BookList from './bookList';
import AñadirLibrosForm from './añadirLibrosForm';
import { useState } from "react";

function App() {
  const [añadirLibro,setAñadirLibro]=useState(false)
  return (
    <div className="App">
      
      <button style={{margin: 10}} onClick={GlobalApi.baseInfoUpload}>Añadir libros del Json</button>
      <button onClick={()=>setAñadirLibro(!añadirLibro)}>Añadir Libros</button>
      
      {añadirLibro?<AñadirLibrosForm cerrar={()=>setAñadirLibro(!añadirLibro)}/>:<BookList/>}
    </div>
  );
}

export default App;

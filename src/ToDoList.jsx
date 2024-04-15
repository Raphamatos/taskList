import React, { useState } from "react";
import "./ToDoList.css";
import Icone from "./assets/icon.png";

function ToDoList() {

    
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState([]);

  function adicionaItem(form) {
    form.preventDefault();
    if (!novoItem) {
      return;
    }
    setLista([...lista, { text: novoItem, isCompeted: false }]);
    setNovoItem("");
    document.getElementById("input-entrada").focus();
  }
  function clicou(index){
    const listaAux = [...lista];
 listaAux[index].isCompeted = !listaAux [index].isCompeted;
 setLista(listaAux);
  }

function delet(index){
    const listaAux = [...lista];
    listaAux.splice(index, 1);
    setLista (listaAux);
}

function deletAll() {
    setLista([]);
}

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionaItem}>
        <input
          id="input-entrada"
          value={novoItem}
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={(e) => {
            setNovoItem(e.target.value);
          }}
        />
        <button className="add" type="submit">
          {" "}
          Add
        </button>
      </form>
      <div className="taskList">
        <div
          style={{
            textAlign: "center",
          }}
        >
          {lista.length < 1 ? (
            <img className="iconCenter" src={Icone} />
          ) : (
            lista.map((item, index) => (
              <div 
              key = {index}
              className={item.isCompeted ? "item completed" : "item"}
              >
                <span onClick={() => { clicou(index)}} > {item.text} </span>

                <button onClick={() => { delet(index)}} className="del"> Deletar </button>

              </div>
            ))
          )}
    {
        lista.length > 0 && 
        <button onClick={() => { deletAll()}} className="deletAll"> Deletar todas</button>
    }
          
          
        </div>
      </div>
    </div>
  );
}

export default ToDoList;

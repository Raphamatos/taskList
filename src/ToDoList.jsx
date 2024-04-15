import React from "react";
import "./ToDoList.css";
function ToDoList() {
  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <form>
        <input type="text" placeholder="Adicione uma tarefa" />
        <button className="add" type="submit"> Add</button>
      </form>
      <div className="taskList">
        <div className="item">
          <span> Tarefa de exemplo</span>
          <button className="del">Deletar</button>
        </div>
        <div className="item completed">
          <span> Tarefa de exemplo</span>
          <button className="del" >Deletar</button>
        </div>
        <button className="deletAll"> Deletar todas</button>
      </div>
    </div>
  );
}

export default ToDoList;

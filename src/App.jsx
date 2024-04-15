import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoList from './ToDoList'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoList />
    <Footer/>
  </React.StrictMode>,
)

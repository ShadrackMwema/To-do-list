import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"


function App() {

 const [todos, setTodos] = useState([])

function addTodo(title){
  setTodos (currentTodos =>{//pass a function every ti me i want to use a value
    return[
    ...todos,//gives me a brand new array
    {id: crypto.randomUUID(),title: newItem, completed:false },
  ]
}
  )
}
function toggleTodo(id, completed){
  setTodos(currentTodos =>{
    return currentTodos.map(todo =>{
      if(todo.id === id){
        return {...todo, completed}
      }
      return todo
    })
  })
}

function deleteTodo(id){
  setTodos(currentTodos =>{
    return currentTodos.filter(todo => todo.id !== id)
  })
}


  return (
    <>
      <NewTodoForm/>
   </>
  )
}

export default App

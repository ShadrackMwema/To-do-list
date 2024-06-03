import { useState } from "react"


function App() {
 const [newItem, setnewItem] = useState("")
 const [todos, setTodos] = useState([])

function handleSubmit(e) {
  e.preventDefault()

  // setTodos ([
  //   ...todos,//gives me a brand new array
  //   {id: crypto.randomUUID(),title: newItem, completed:false },
  // ])
  setTodos (currentTodos =>{//pass a function every ti me i want to use a value
    return[
    ...todos,//gives me a brand new array
    {id: crypto.randomUUID(),title: newItem, completed:false },
  ]
}
  )
  
}


  return (
    <>
      
      <form 
      onSubmit={handleSubmit}
      className="new-item-form">
        <div className="Header">
          <h1>My To-Do List</h1>
        </div>
      
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} 
          onChange={e => setnewItem(e.target.value)} 
          className="input-new" 
          type="text" />
          <br />

        </div>

        <button className="btn-add">Add</button>
      <div>
        <h2>Items</h2>
        <ul>
          {todos.map(todo =>{
            return (
            <li key = {todo.id}>
              <label>
            <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={e => toggleTodo(todo.id, e.target.checked)}/>
           
           {todo.title}
             </label>
             <button className="btn-del">Delete</button>
           </li>
            )
          })}

        
        </ul>
      </div>

      </form>
    </>
  )
}

export default App

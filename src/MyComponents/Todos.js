import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  let MyStyle = {
    minHeight: "70vh",
    top: "70vh",
    margin: "40px auto",
  }
  return (
    <div className="container my-3" style={MyStyle}>
      <h3 className=' my-3'>Todos List</h3>
      {/*<Todo todo={props.todos[0]}/>*/}
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <>
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr />
            </>
          )
        })
      }
    </div>
  )
}
export default Todos
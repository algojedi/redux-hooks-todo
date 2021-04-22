import React, { MouseEvent, ChangeEvent, FormEvent, useState } from 'react';
import './App.scss'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { State, Todo } from './redux/types/types';
import { createTodoAction, deleteTodoAction, toggleTodoAction } from './redux/actions/actions';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: State) => state.todos)
  const counter = useSelector((state: State) => state.counter)
  const [input, setInput] = useState<string>('')

  toast.configure()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleTodoClick = (id: string): any => {
    dispatch(toggleTodoAction({ id }))
  }
  const handleDeleteTodoClick = (id: string): any => {
    dispatch(deleteTodoAction({ id }))
  }

  const handleAddTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (input == '') {
      toast.error('Must enter todo message', {
        className: "error-toast",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      return
    }
    dispatch(createTodoAction({ content: input }))
    setInput('')
  }

  return (
    <div className="App">
      <form className="form" onSubmit={handleAddTodo}>
        <input placeholder="Enter todo..." type="text" value={input} onChange={handleInputChange} className="input_todo" />

        <h4 className="todo_title">Todo's</h4>

        <ul className="list_todo">
          {todos.map((todo: Todo) =>
            <li key={todo.id} >
              <span className={!todo.isCompleted ? "list_todo_item" : "list_todo_item list_todo_item_completed"}
                onClick={() => { handleTodoClick(todo.id) }}>
                {todo.content}
              </span>
              <span className="list_todo_delete-btn"
                onClick={() => { handleDeleteTodoClick(todo.id) }}>X</span>
            </li>)}
        </ul>
        <button type="submit" className="form_submit-btn">Add Todo</button>
      </form>
    </div>
  );
}
export default App;

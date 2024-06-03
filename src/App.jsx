import Home from "./component/Home";
import Event from "./component/Event";
import "./App.css";
import State from "./component/State";
import InputContainer from "./component/InputContainer";
import ToDoContainer from "./component/ToDoContainer";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function addTodos() {
    if (input != "") {
      setTodos((prevTodo) => [...prevTodo, input]);
      setInput("");
    }
  }

  function deleteTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        input={input}
        handleChange={handleChange}
        addTodos={addTodos}
      />
      <ToDoContainer todos={todos} deleteTodo={deleteTodo}/>
    </main>
  );
}

export default App;

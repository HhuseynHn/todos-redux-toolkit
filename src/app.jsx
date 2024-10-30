/** @format */

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { addTodo, toggleTodo } from "./todos-slice";

function App() {
  const todos = useSelector((state) => state.todos); //-?
  const distpatch = useDispatch(); //-?

  const newTodo = useRef("");
  const hundleAddtodo = () => {
    distpatch(addTodo(newTodo.current.value)); //-?
    newTodo.current.value = "";
  };
  const hundleTogleTodo = (id) => {
    distpatch(toggleTodo(id)); //-?
  };

  return (
    <>
      <div className="flex flex-col mx-auto w-1/3 gap-y-5 mt-32 border p-5 rounded-md shadow-md shadow-gray-700">
        <div className="w-full flex justify-center text-2xl font-bold bg-lime-400 rounded-md">
          <h1>Todos</h1>
        </div>

        <div className="flex gap-x-4 justify-between">
          <input
            type="text"
            className="border-gray-600 border rounded-md px-2 py-0.5 w-8/12"
            ref={newTodo}
            onChange={newTodo}
          />
          <button
            onClick={hundleAddtodo}
            className="text-indigo-900 font-bold border border-gray-600 py-0.5 px-4 rounded-md">
            Add Todo
          </button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li
              key={todo.id}
              onClick={() => hundleTogleTodo(todo.id)}
              className="border-b px-0.5 border-gray-600">
              {todo.completed ? (
                <del className="flex gap-x-1.5">
                  <span>{index + 1}.</span> <p>{todo.text}</p>
                </del>
              ) : (
                <div className="flex gap-x-1">
                  <span>{index + 1}.</span> <p>{todo.text}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

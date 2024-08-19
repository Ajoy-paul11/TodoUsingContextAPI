import React, { useState } from "react";
import { useTodo } from "../context";

function FormTodo() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <>
      <form onSubmit={add} className=" flex">
        <input
          type="text"
          className=" xl:text-2xl w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 text-blue-500 bg-white/80 py-1.5"
          placeholder="Enter todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className=" xl:text-2xl rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default FormTodo;

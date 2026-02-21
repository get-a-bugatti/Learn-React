import {useId, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../features/todo/todoSlice.js"

export default function TodoForm() {
    const  taskNameId = useId();
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        useDispatch(addTodo(taskName));
        setTaskName("");
    }


    return (
        <form onSubmit={handleSubmit} className="space-x-3 mt-12">
        <label htmlFor={taskNameId}>Task Name: </label>
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={taskName}
          id={taskNameId}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    );

}
import { useRef } from "react";
import { useTodo } from "../context/index";

export default function TodoForm() {
    
    const {todos, addTodo, updateTodo, deleteTodo, toggleComplete} = useTodo();

    let inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(inputRef.current.value);
    }
    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                ref={inputRef}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer" onClick={handleSubmit}>
                Add
            </button>
        </form>
    );
}
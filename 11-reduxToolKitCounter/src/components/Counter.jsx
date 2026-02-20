import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "../features/counter/counterSlice.js"

export default function Counter() {
    const counter = useSelector(state => state)

    const dispatch = useDispatch();

    return(
        <>
            <p>Counter: {counter}</p>
            <button onClick={() => dispatch(increment())}>Add Value</button>
            <button onClick={() => dispatch(decrement())}>Subtract Value</button>
        </>
    );
}
import React,  {useState} from "react";
import '../Styles/App.css';

function useIncrement() {
    const [count, setCount] = useState(0);
    const increment = function () {
        setCount(c => c + 1);

    }
    return [count, increment];
}

function Value() {
    const [count, increment] = useIncrement();
    return (
        <div className="counter">
            <h1>
                {count}
            </h1>
            <button className="add-btn" onClick={increment}>+</button>
        </div>
    )
}
export default Value;
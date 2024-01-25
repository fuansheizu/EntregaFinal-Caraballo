import { useState } from "react";

const Counter = () => {

    const [number, setNumber] = useState(0);

    const sumar = () => {
        setNumber(number + 1);
    }

    const restar = () => {
        setNumber(number -1);
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </div>
    )
};

export default Counter;
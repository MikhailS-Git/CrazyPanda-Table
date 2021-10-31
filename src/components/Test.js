import { useState } from "react"

export default function Test(){

    const [counter, setCounter] = useState(0)

    function add(){
        setCounter(counter+1)
    }

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={add}>ADD</button>
        </div>
    )
}
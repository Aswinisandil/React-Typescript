import { useState } from "react";


export default function(){
    const [ count, setCount ] = useState<number>(0);
    function handleClick(){
        setCount((prevCount)=> (prevCount) + 1)
    }
    return(
        <div>
            <button onClick = {handleClick}>clicked {count}</button>
        </div>
    )
}
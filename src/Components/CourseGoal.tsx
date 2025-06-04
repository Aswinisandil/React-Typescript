import { type ReactNode } from "react";

interface CourseGoalProps {
    title: string;
    id: number;
    // description: string;
    children: ReactNode;
    onDelete: (id: number)=> void;
}

export default function({title, children, id, onDelete}:CourseGoalProps){
    return <article>
        <div>
            <h2>{title}</h2>
            {/* <p>{description}</p> */}
            {children}
            <br></br>
            <button onClick = {() => onDelete(id)}>Delete</button>
        </div>
    </article>
}
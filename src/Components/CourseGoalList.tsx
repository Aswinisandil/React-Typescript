import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from '../App.tsx';
import Infobox from "./InfoBox.tsx";
import { ReactNode } from "react";

type CourseGoalList = {
  goals:CGoal[];
  onDeleteGoal: (id: number)=> void;
}


export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalList) {

    if(goals.length === 0){
        return<Infobox mode="hint">You have no goals yet. Start adding some !</Infobox>
     }

     let warningBox: ReactNode;
     if(goals.length >= 5){
        warningBox = <Infobox mode="warning" severity="high"> You have reached max goals. Dont put too much on your plate!.</Infobox>
     }
    return (
        <>
        {warningBox}
        <ul>
            {
                goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal id ={goal.id} title={goal.title} onDelete = {onDeleteGoal}>
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                ))
            }
        </ul>
        </>
    )
}
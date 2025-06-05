import goalsImage from "./assets/goals.jpg";
import Header from "./Components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./Components/CourseGoalList.tsx";
import NewGoal from "./Components/NewGoal.tsx";
// import Counter from "./Components/Counter.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevgoal) => {
      const newgoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      }
      return [...prevgoal, newgoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevgoal) => prevgoal.filter((goal) => goal.id !== id))
  }

  return <main>
    <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
      <h1>Your Goals</h1>
    </Header>
    {/* <button onClick={handleGoal}>Add Goal</button> */}
    <NewGoal onAddGoal={handleAddGoal} />

    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    {/* <Counter/> */}
  </main>
}


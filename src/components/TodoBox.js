import { useSelector } from "react-redux";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import Statistik from "./Statistik";



const TodoBox = () => {
    const taskText = useSelector(state => state.text)
    
    return(
        <>
        <TaskInput/>
        
        {taskText.map((item, id) => {
                return  <TaskItem text={item} key={id}/>
        })}

        <Statistik/>
        </>
    );
};

export default TodoBox;
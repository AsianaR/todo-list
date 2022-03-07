import { useSelector } from "react-redux";
import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import Statistik from "./Statistik";



const TodoBox = () => {
    const taskText = useSelector(state => state.text)
    const [isEmpty, setIsEmpty] = useState(true);

    

    return(
        <>
        
        <TaskInput/>
        { 
        taskText.reverse().map( (item, id) => {
            if(item !== '' ){   
                return  <TaskItem text={item} key={id}/>
            }
        })}

        <Statistik/>
        </>
    );
};

export default TodoBox;
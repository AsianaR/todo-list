import { useSelector } from "react-redux";
import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";



const TodoBox = () => {
    const taskText = useSelector(state => state.text)
    const [isEmpty, setIsEmpty] = useState(true);

    
    
    return(
        <>
        
        <TaskInput/>
        { 
        taskText.map( (item, id) => {
            if(item !== '' ){   
                return  <TaskItem text={item} key={id}/>
            }
        })}
        </>
    );
};

export default TodoBox;
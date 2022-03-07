import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { deleteTaskCreator } from "../store/actionCreators/actionCreator";
import { useDispatch } from "react-redux";

const StyledLi = styled.li`
    max-height: 60px;
    width: 90%;
    padding: 15px 10px; 
    background: #E9E9E9;
    margin-top: 20px;
    text-align: left;
    display:inline-block;
    vertical-align: middle;

    button{
        float: right;
        height: 100%;
        width: 40px;
        font-size: 20px;
        background: inherit;
        border: none;
    }

    p{
        font-size: 26px;
    }

`;

const TaskItem = (props) => {
        const [isChecked, setChecked] = useState(false);    
        const dispatch = useDispatch();
        console.log(props.key);
    return(
        <StyledLi>
                          
            <p style={isChecked? {textDecoration: "line-through", color: "red"} : { textDecoration : "none"}}>{props?.text}</p>
            <button onClick={ () => {dispatch(deleteTaskCreator(props.key))}}><FontAwesomeIcon icon={faXmark} /></button>
            <button onClick={() => setChecked(true)}  style={isChecked? {visibility: "hidden"} : {visibility : "visible"}}><FontAwesomeIcon icon={faCheck} /></button>
            
        </StyledLi>
        );
}

export default TaskItem;
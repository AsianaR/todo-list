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
    background: linear-gradient(to left, #EC6EAD13, #3493E617);
    margin: 0 auto;
    margin-top: 20px;
    text-align: left;
    display: flex;
    vertical-align: middle;
    justify-content: space-between;

    button{
        height: 100%;
        width: 40px;
        font-size: 20px;
        background-color: transparent;
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
                          
            <p style={isChecked? {textDecoration: "line-through", color: "#E5E4E2"} : { textDecoration : "none"}}>{props?.text}</p>
            <span>

            <button onClick={() => setChecked(true)}  style={isChecked? {visibility: "hidden"} : {visibility : "visible"}}><FontAwesomeIcon icon={faCheck} /></button>
            <button onClick={ () => {dispatch(deleteTaskCreator(props.text))}}><FontAwesomeIcon icon={faXmark} /></button>
            </span>
            
        </StyledLi>
        );
}

export default TaskItem;
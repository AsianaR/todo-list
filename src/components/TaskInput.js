import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskCreator } from "../store/actionCreators/actionCreator";


const InputWrapper = styled.div`
  margin: 25px auto;
  position: relative;
  background: #fff;
  
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  width: 100%;
  
  input {
    width: calc(90% - 80px);
    text-align: center;
    height: 100%;
    padding: 20px 10px;
    
    border: 0;
    font-size: 25px;
  }
  input:focus {outline:none!important;}

  button {
    position: absolute;
    display: inline-block;
    background: #fff;
    color: inherit;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;
    transition: all 200ms ease-in;
    cursor: pointer;
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
    width: 60px;
    height: 100%;

  }
`;

const TaskInput = () => {
  const [value, setValue] = useState();
  
  const dispatch = useDispatch();

  const addTaskWithCheck = () => {
    if(value !== undefined && value !== '' && value.length > 1)
    {
      dispatch(addTaskCreator(value));
      setValue(undefined);
    }
  }

  return (
    <>
      <h1>What's the Plan for Today?</h1>

    <InputWrapper>
      <input onChange={e => setValue(e.target.value)} onBlur={e => {e.target.value = '';}}></input>
      <button onClick={addTaskWithCheck}><FontAwesomeIcon icon={faPen} /></button>
    </InputWrapper>
    </>
  );
};

export default TaskInput;

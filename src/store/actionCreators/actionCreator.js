import {ADD_TASK, DELETE_TASK} from "../actions/actions.js";

const addTaskCreator = (payload) => {
    return { type: ADD_TASK, payload }
};

const deleteTaskCreator = (payload) => {
    return { type: DELETE_TASK, payload }
};

export {addTaskCreator, deleteTaskCreator};
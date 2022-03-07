import initialState from "../initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "ADD_TASK":
      return { ...state, text: [...state.text, action.payload]};
    
    case "DELETE_TASK":
      return { ...state, text: state.text.filter(text => text !== action.payload)};

    default:
        return state;
  }
};


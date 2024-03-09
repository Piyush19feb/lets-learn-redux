import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types";

const initialState = [];

export default (state = initialState, action) => {
  // using switch
  switch (action.type) {
    case ADD_TODO:
      // add todo logic
      return [...state, action.payload]; // will create new array with all data in state argument and then it'll add paylaod too
      break;

    case DELETE_TODO:
      // delete todo logic
      const newState = state.filter((todo) => todo.id != action.payload);
      return newState;
      break;

    case UPDATE_TODO:
      // update todo logic
      const updateState = state.map((todo) => {
        if (todo.id == action.payload.todoId) {
          todo.title = action.payload.todo.title;
          todo.description = action.payload.todo.description;
        }
        return todo;
      });
      return updateState;
      break;

    default:
      return state;
      break;
  }

  // using if-else
  // if(action.type === ADD_TODO){
  //     // add todo logic
  // }else if(action.type === DELETE_TODO){
  //     // delete todo logic
  // }else if(action.type === UPDATE_TODO){
  //     // update todo logic
  // }else{
  //     // return initial state
  // }
};

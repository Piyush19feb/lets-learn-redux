import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-types";

// action for add todo
export const addToDo = (todo)=>({
    type:ADD_TODO,
    payload:todo
})

// action for delete todo
export const deleteTodo = (id) =>({
    type:DELETE_TODO,
    payload:id
})

// action for update todo
export const updateTodo = (todo, id) =>({
    type:UPDATE_TODO,
    payload:{todo:todo, todoId:id}
})
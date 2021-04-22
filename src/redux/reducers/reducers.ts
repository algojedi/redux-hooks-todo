import {
    Todo,
    Action,
    CreateTodoActionType,
    DeleteTodoActionType,
    EditTodoActionType,
    ToggleTodoActionType
} from '../types/types'
// import { v1 as uuid } from 'react-uuid'
import { combineReducers } from 'redux'
import { nanoid } from 'nanoid'

const todo1: Todo = {
    id: nanoid(), // uuid(),
    content: "I'm number one!",
    isCompleted: false
}
const todo2: Todo = {
    id: nanoid(), // uuid(),
    content: "I'm number two!",
    isCompleted: false
}
const initialState: Todo[] = [todo1, todo2]

type todoActionTypes =  // a type that holds an interface
    | CreateTodoActionType
    | DeleteTodoActionType
    | ToggleTodoActionType
    | EditTodoActionType

const todosReducer = (
    state = initialState,
    { type, payload }: todoActionTypes
) => {
    switch (
        type // the type property refers to Action enum value
    ) {
        case Action.ADD_TODO:
            return [...state, payload]
        case Action.DELETE_TODO:
            return state.filter((todo) => todo.id != payload.id)
        case Action.TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === payload.id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        case Action.EDIT_TODO:
            return state.map((todo) =>
                todo.id === payload.id
                    ? { ...payload, isCompleted: todo.isCompleted }
                    : todo
            )
        default:
            return state
    }
}

// create a useless reducer just to show how reducer get combined to make up store

const counterReducer = (
    // we don't need payload for this reducer
    state = 0,
    { type, payload }: todoActionTypes
) => {
    // the type property refers to Action enum value
    switch (type) {
        case Action.ADD_TODO:
        case Action.DELETE_TODO:
        case Action.TOGGLE_TODO:
        case Action.EDIT_TODO:
            return state + 1
        default:
            return state
    }
}

export const reducers = combineReducers({
    counter: counterReducer,
    todos: todosReducer
})

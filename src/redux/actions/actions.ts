import {
    Action,
    CreateTodoActionType,
    DeleteTodoActionType,
    EditTodoActionType,
    ToggleTodoActionType
} from '../types/types'
// import { v4 as uuid } from 'uuid'
import { nanoid } from 'nanoid'

export const createTodoAction = (data: {
    content: string
}): CreateTodoActionType => {
    const { content } = data
    return {
        type: Action.ADD_TODO,
        payload: { id: nanoid(), content, isCompleted: false }
    }
}

export const deleteTodoAction = (data: {
    id: string
}): DeleteTodoActionType => {
    const { id } = data
    return { type: Action.DELETE_TODO, payload: { id } }
}

export const editTodoAction = (data: {
    content: string
    id: string
}): EditTodoActionType => {
    const { id, content } = data
    return { type: Action.EDIT_TODO, payload: { id, content } }
}

export const toggleTodoAction = (data: {
    id: string
}): ToggleTodoActionType => {
    const { id } = data
    return { type: Action.TOGGLE_TODO, payload: { id } }
}

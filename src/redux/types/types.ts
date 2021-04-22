// action types
export enum Action {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    SELECT_TODO,
    TOGGLE_TODO
}

export interface Todo {
    isCompleted: boolean
    content: string
    id: string
}

export interface State {
    todos: Todo[]
    // selectedTodo: string | null;
    counter: number
}

// create todo
export interface CreateTodoActionType {
    type: typeof Action.ADD_TODO
    payload: Todo
}

// delete todo
export interface DeleteTodoActionType {
    type: typeof Action.DELETE_TODO
    payload: { id: string }
}

// edit todo
export interface EditTodoActionType {
    type: typeof Action.EDIT_TODO
    payload: { id: string; content: string }
}

// toggle todo
export interface ToggleTodoActionType {
    type: typeof Action.TOGGLE_TODO
    payload: { id: string }
}

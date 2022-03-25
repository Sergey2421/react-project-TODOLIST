const EDIT_TEXT = 'EDIT_TEXT';
const CONFIRM = 'CONFIRM';
const DELETE = 'DELETE';
const DISABLE = 'DISABLE';
const DELETE_COMPLETED = 'DELETE_COMPLETED';

export const task_reducer = (state, action) => {

    switch (action.type) {
        case EDIT_TEXT: {
            state.taskElements[action.index] = action.text;
            return state;
        }
        case CONFIRM: {
            state.completedTasks.push(state.taskElements.splice(action.index, 1));
            state.disabled.splice(action.index, 1);
            return state;
        }
        case DELETE: {
            state.taskElements.splice(action.index, 1);
            state.disabled.splice(action.index, 1);
            return state;
        }
        case DISABLE: {
            state.disabled[action.index] = !state.disabled[action.index];
            return state;
        }
        case DELETE_COMPLETED: {
            state.completedTasks.splice(action.index, 1);
            return state;
        }
        default: return state;
    }
}

export const editAction = (text, id) => {
    return {
        type: EDIT_TEXT,
        text: text,
        index: id,
    }
}

export const confirmAction = (id) => {
    return {
        type: CONFIRM,
        index: id,
    }
}

export const disableAction = (id) => {
    return {
        type: DISABLE,
        index: id,
    }
}

export const deleteAction = (id) => {
    return {
        type: DELETE,
        index: id,
    }
}

export const deleteCompletedAction = (id) => {
    return {
        type: DELETE_COMPLETED,
        index: id,
    }
}
const ADD_ITEM = 'ADD_ITEM';
const ADD_TEXT = 'ADD_TEXT';
const CLEAR = 'CLEAR';
const EDIT_TEXT = 'EDIT_TEXT';
const CONFIRM = 'CONFIRM';
const DELETE = 'DELETE';
const DISABLE = 'DISABLE';
const DELETE_COMPLETED = 'DELETE_COMPLETED';

let state = {
    taskElements: [],
    completedTasks: [],
    disabled: [],
    textField: '',
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_ITEM: {
                this.taskElements.push(action.text);
                this.disabled.push(true);
                this.textField = '';
                this._callSubscriber(state);
                break;
            }
            case ADD_TEXT: {
                this.textField = action.text;
                this._callSubscriber(state);
                break;
            }
            case CLEAR: {
                this.taskElements = [];
                this.completedTasks = [];
                this._callSubscriber(state);
                break;
            }
            case EDIT_TEXT: {
                this.taskElements[action.index] = action.text;
                this._callSubscriber(state);
                break;
            }
            case CONFIRM: {
                this.completedTasks.push(this.taskElements.splice(action.index, 1));
                this.disabled.splice(action.index, 1);
                this._callSubscriber(state);
                break;
            }
            case DELETE: {
                this.taskElements.splice(action.index, 1);
                this.disabled.splice(action.index, 1);
                this._callSubscriber(state);
                break;
            }
            case DISABLE: {
                this.disabled[action.index] = !this.disabled[action.index];
                this._callSubscriber(state);
                break;
            }
            case DELETE_COMPLETED: {
                this.completedTasks.splice(action.index, 1);
                this._callSubscriber(state);
                break;
            }
            default: break;
        }
    }
}

export const addItemAction = (text) => {
    return {
        type: ADD_ITEM,
        text: text,
    }
}

export const addTextInputAction = (text) => {
    return {
        type: ADD_TEXT,
        text: text,
    }
}

export const clearAction = () => ({type: CLEAR});

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

export default state;
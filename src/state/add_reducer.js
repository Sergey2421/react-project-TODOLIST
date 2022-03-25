const ADD_ITEM = 'ADD_ITEM';
const ADD_TEXT = 'ADD_TEXT';

export const add_reducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            state.taskElements.push(state.textField);
            state.disabled.push(true);
            state.textField = '';
            return state;
        }
        case ADD_TEXT: {
            state.textField = action.text;
            return state;
        }
        default: return state;
    }
}

export const addItemAction = () => {
    return {
        type: ADD_ITEM,
    }
}

export const addTextInputAction = (text) => {
    return {
        type: ADD_TEXT,
        text: text,
    }
}
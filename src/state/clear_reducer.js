const CLEAR = 'CLEAR';

export const clear_reducer = (state, action) => {

    switch (action.type) {
        case CLEAR: {
            state.taskElements = [];
            state.completedTasks = [];
            return state;
        }
        default: return state;
    }
}

export const clearAction = () => ({type: CLEAR});
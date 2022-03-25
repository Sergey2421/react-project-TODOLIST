import {add_reducer} from "./add_reducer";
import {task_reducer} from "./task_reducer";
import {clear_reducer} from "./clear_reducer";

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
        state = add_reducer(state, action);
        state = task_reducer(state, action);
        state = clear_reducer(state, action);
        this._callSubscriber(state);
    },
}

export default state;
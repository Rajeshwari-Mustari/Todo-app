import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TASK" :
            // return[
            //     ...state,{
            //         id: action.id,
            //         text: action.text,
            //         completed: false,
            //     }
            // ];
            state = state.concat(action.payload);
            break;
        case "DELETE_TASK" :
            // const numIndex = parseInt(action.payload);
            // return state.filter(task => task.id !== numIndex);
            state = state.slice();
            state.splice(action.payload, 1);
            break;
        default: return state
    }
    return state;
},
    reducers = combineReducers({
        tasks: tasksReducer
    });

export default reducers
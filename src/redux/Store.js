import editPostReducer from './reducers/EditPostReducer';

const redux = require('redux');
var allReducer = redux.combineReducers({
    postOld: editPostReducer
});
const Store = redux.createStore(allReducer);

export default Store;
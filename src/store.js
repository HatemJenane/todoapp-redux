import {createStore,combineReducers} from 'redux'
import inputReducer from './reducers/inputReducer.js'
import mainReducer from './reducers/mainReducer.js'
const store=createStore(combineReducers({
  input:inputReducer,
  main:mainReducer
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
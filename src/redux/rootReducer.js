import { combineReducers } from "redux";
import shopReducer from '../redux/Shoping/shopping-reducer'

const rootReducer = combineReducers({
    shop: shopReducer
});
export default rootReducer
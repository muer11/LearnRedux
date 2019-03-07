import { combineReducers } from "redux";
import productReducer from "./product-reducers";
import cartReducer from "./cart-reducers";

const allReducers = {
    products: productReducer,
    cart: cartReducer,
}
const rootReducer = combineReducers(allReducers);

export default rootReducer;
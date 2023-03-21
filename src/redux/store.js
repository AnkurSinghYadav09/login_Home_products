import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import { productReducer } from "./products/reducer";

const combined = combineReducers({
  authReducer: authReducer,
  productReducer: productReducer,
});

const Store = legacy_createStore(combined, applyMiddleware(thunk));

export { Store };

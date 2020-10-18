import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

//import appReducer from "../../modules/app/reducer";
//import authReducer from "../../modules/auth/reducer";

const createRootReducer = (history: any) => combineReducers({
    //app: appReducer,
    //auth: authReducer,

    router: connectRouter(history)
});

export default createRootReducer;

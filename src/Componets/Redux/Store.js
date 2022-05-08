import {createStore} from "redux"
import rootReducer from "./CombinReducer";


const Store = createStore(rootReducer);

export default Store;  
import { createStore } from "redux";
import reducer from "./reducer";

//higher order function take func as argument
const store = createStore(reducer);

export default store;

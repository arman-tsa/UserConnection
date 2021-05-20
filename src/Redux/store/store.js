import { createStore } from "redux";
import rootReducers from "../Reducers/rootReducers";

export const store = createStore(rootReducers);
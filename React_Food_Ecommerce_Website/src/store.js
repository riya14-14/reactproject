import { createStore } from "redux";
import rootred from "./redux/actions/reducers/main";

const store = createStore(rootred);

export default store;

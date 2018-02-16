import {combineReducers} from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import editTask from "./editTask";
import filterTable from "./filterTable";
import search from "./search";
import sort from "./sort";
const reducer = combineReducers({
tasks,
isDisplayForm,
editTask,
filterTable,
search,
sort

});
export default reducer;

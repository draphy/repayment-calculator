import { createStore } from "redux";
import reduserFun from "@/loans/loanReducer";

const store = createStore(reduserFun);
export default store;

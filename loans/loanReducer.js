import { ADD_BALANCE } from "../loans/loanTypes";
import { DELETE_BALANCE } from "../loans/loanTypes";

const initialState = { balance: 0, history: [] };

const reduserFun = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BALANCE:
      return {
        balance: state.balance + action.payload,
        history: [...state.history, action.payload],
      };
    case DELETE_BALANCE:
      return {
        balance : action.payload.balance,
        history : [...action.payload.history]
      };
    default:
      return state;
  }
};

export default reduserFun;

import { ADD_BALANCE } from "./loanTypes";
import {DELETE_BALANCE} from "./loanTypes"

export const addBalance = (isSubmit) => {
  return {
    type: ADD_BALANCE,
    payload: Number(isSubmit),
  };
};

export const deleteBalance = (newHistory , newBalance) => {
  return {
    type: DELETE_BALANCE,
    payload:{balance : newBalance , history : newHistory},
  };
};

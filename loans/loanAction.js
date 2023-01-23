import { ADD_BALANCE } from "./loanTypes";

export const addBalance = (isSubmit) => {
  return {
    type: ADD_BALANCE,
    payload: Number(isSubmit),
  };
};

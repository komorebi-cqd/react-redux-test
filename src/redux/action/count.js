export const actionTypes = {
  INCREASE: "increase",
  DECREASE: "decrease",
  ASYNCINCREASE: "async-increase",
  ASYNCDECREASE: "async-decrease",
};

export function increaseAction() {
  return {
    type: actionTypes.INCREASE,
  };
}

export function decreaseAction() {
  return {
    type: actionTypes.DECREASE,
  };
}

export function asyncIncreaseAction() {
  return {
    type: actionTypes.ASYNCINCREASE,
  };
}

export function asyncDecreaseAction() {
  return {
    type: actionTypes.ASYNCDECREASE,
  };
}

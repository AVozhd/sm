import * as types from './actionsTypes';

export const setWindowDimensions = (newWindowDimensions) => {
  return {
    type: types.ACTION_RESIZE_WINDOW,
    payload: newWindowDimensions
  };
};

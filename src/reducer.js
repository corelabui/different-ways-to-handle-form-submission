export const initialState = {
  values: {
    name: '',
  },
};

export function formReducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.field]: action.payload.value,
        },
      };
    default:
      return state;
  }
}

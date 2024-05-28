import { useReducer } from 'react';
import { formReducer, initialState } from './reducer';

function ControlledForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <form>
      <label>
        Enter your name:
        <br />
        <input
          type="text"
          value={state.values.name}
          onChange={(e) =>
            dispatch({
              type: 'SET_VALUE',
              payload: { field: 'name', value: e.target.value },
            })
          }
        />
      </label>
    </form>
  );
}

export default ControlledForm;

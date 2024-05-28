import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm';
import UncontrolledFormActionAttribute from './UncontrolledFormActionAttribute';

function App() {
  return (
    <div>
      <h3>Controlled Form example</h3>
      <ControlledForm />
      <h3>Uncontrolled Form example</h3>
      <UncontrolledForm />
      <h3>Uncontrolled Form example using React's action attribute</h3>
      <UncontrolledFormActionAttribute />
    </div>
  );
}

export default App;

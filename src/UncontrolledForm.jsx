import { useRef } from 'react';

function UncontrolledForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    alert(JSON.stringify(formValues, null, 2));
  };

  return (
    <form action={handleSubmit}>
      <label>
        Enter your name:
        <br />
        <input name="name" type="text" />
      </label>
    </form>
  );
}

export default UncontrolledForm;

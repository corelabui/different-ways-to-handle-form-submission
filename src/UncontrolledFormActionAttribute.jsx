function UncontrolledFormActionAttribute() {
  const handleSubmit = (formData) => {
    const name = formData.get('name');
    alert(name);
  };

  return (
    <form action={handleSubmit}>
      <label>
        Enter your name:
        <br />
        <input name="name" type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledFormActionAttribute;

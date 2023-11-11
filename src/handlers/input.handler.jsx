const handleInputChange = (event, setFunction) => {
  const { name, value } = event.target;
  setFunction((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

export default handleInputChange;

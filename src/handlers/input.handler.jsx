const handleInputChange = (event, functionName) => {
  const { name, value } = event.target;
  functionName((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

export default handleInputChange;

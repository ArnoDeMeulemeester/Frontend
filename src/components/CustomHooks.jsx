import {useState} from 'react';

const useLoginForm = (callback) => {
  const [inputs, setInputs] = useState({Username: '', password1: ''});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }

  //Without event.persist() , 
  //React will make the first event value as null when second event is fired.

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useLoginForm;
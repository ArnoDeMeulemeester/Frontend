import ReactDom from 'react-dom';
import useLoginForm from './CustomHooks';
import './LoginForm.css';
import './SignUpForm';
import SignUpForm from './SignUpForm';
import App from '../App';
import LiederenLijst from './LiederenLijst'
import axios from 'axios';
import { useEffect, useState } from 'react';
import bcrypt from 'bcryptjs'
import React from 'react';
import Button from 'react-bootstrap/Button';

const LoginForm = () => { 

  const [user, setUser] = useState();
  const [errorMsg, setErrorMsg] = useState('');
  
  useEffect(() => {
    try{
      bcrypt.compare(inputs.password1, user.password).then(validPass => {
        if(validPass){
          setErrorMsg('');
          continueAsUserHandler();
        }else{
          setErrorMsg('foute gebruikersnaam of wachtwoord');
        }
      });
    }catch(error){

    }
  }, [user]);
      

  const getUser = async () => {
    const response = await axios.get(`https://arno-dm-project-api.herokuapp.com/api/users/name/${inputs.Username}`);
    setUser(response.data[0]);
  } 

  const {inputs, handleInputChange, handleSubmit} = useLoginForm(getUser);

  const createAccountHandler = () =>{
    ReactDom.render(
      <>
        <App />
        <SignUpForm />
      </>,
    document.getElementById('root')
    );
  }


  const continueAsUserHandler = () => {
    ReactDom.render(
      <>
        <App user={user}/>
        <LiederenLijst user={user}/>
      </>,
    document.getElementById('root')
    );
  }

  return(
    <fieldset>
      <legend>Log in op je account</legend>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Gebruikersnaam:</label>
          <input data-cy="username" type="text" name="Username" className="inputfield" required  onChange={handleInputChange} value={inputs.Username} />
        </div>
        <div>
          <label>Wachtwoord: </label>
          <input data-cy="password" type="password" name="password1" className="inputfield" required  onChange={handleInputChange} value={inputs.password1} />
        </div>
        <button data-cy="submit" type="submit" className="btn btn-primary">Log in</button>
        <div id="createAccount" onClick={createAccountHandler}>Ik heb nog geen account</div>
        <div id="errorMsg">{errorMsg}</div>
      </form>
    </fieldset>
  );

}
export default LoginForm
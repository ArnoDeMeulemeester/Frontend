import useLoginForm from './CustomHooks';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import App from '../App';
import './SignUpForm.css';
import axios from 'axios';
import { useState } from 'react';
import LiederenLijst from './LiederenLijst';
import bcrypt from 'bcryptjs';

const SignUpForm = () => {

  const checkPasswordMatchAndSignUp = () => {
      if(inputs.password1 !== inputs.password2){
        alert('password mismatch');
      }else{
          registerUser(inputs.Username, inputs.password1);
          //getUsers();
          SignInHandler();
      }
    };
  const {inputs, handleInputChange, handleSubmit} = useLoginForm(checkPasswordMatchAndSignUp);
  //const [users, setUsers] = useState([]);

  const registerUser = async (userName, password) => {
    const hash = bcrypt.hashSync(password);
    await axios.post('https://arno-dm-project-api.herokuapp.com/api/users', {
      "name": userName,
      "password": hash
    });
  };

  // const getUsers = async () => {
  //   const response = await axios.get('http://localhost:9000/api/users')
  //   setUsers(response.data);
  //   console.log(users);
  // };
  

  const SignInHandler = () =>{
    ReactDOM.render(
      <>
        <App />
        <LoginForm />
      </>,
    document.getElementById('root')
    );
  }

  const continueAsGuestHandler = () =>{
    ReactDOM.render(
      <>
        <App />
        <LiederenLijst />
      </>,
    document.getElementById('root')
    );
  }

  return(
    <fieldset>
      <legend>Maak een nieuw account</legend>
      <form onSubmit={handleSubmit}>

          <div>
            <label>Gebruikersnaam:</label>
            <input type="text" name="Username" className="inputfield" required  onChange={handleInputChange} value={inputs.Username} />
          </div>
          <div>
            <label>Wachtwoord: </label>
            <input type="password" name="password1" className="inputfield" required  onChange={handleInputChange} value={inputs.password1} />
          </div>
          <div>
            <label>Herhaal wachtwoord: </label>
            <input type="password" name="password2" className="inputfield" required  onChange={handleInputChange} value={inputs.password2} />
          </div>
        
        <button type="submit">Registreer</button>
        <div id="LoginToAccount" onClick={SignInHandler}>Ik heb al een account</div>
        <div id="continueAsGuest" onClick={continueAsGuestHandler}>Verdergaan als gast</div>
      </form>
    </fieldset>
  );
}
export default SignUpForm
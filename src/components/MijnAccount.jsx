import App from "../App";
import SignUpForm from "./SignUpForm";
import './MijnAccount.css';
import { useEffect, useState } from 'react';
import useLoginForm from './CustomHooks';
import ReactDom from 'react-dom';
import axios from "axios";
import bcrypt from 'bcryptjs';
import ManageAccount from "./ManageAccount";
import { Form, Button } from "react-bootstrap"

const MijnAccount = (props) => {

  const [errorMsg, setErrorMsg] = useState('');
  const [user, setUser] = useState();


  useEffect(() => {
    try{
      bcrypt.compare(inputs.password1, user.password).then(validPass => {
        if(validPass){
          setErrorMsg('');
          letUserContinue();
        }else{
          setErrorMsg('foute gebruikersnaam of wachtwoord');
        }
      });
    }catch(error){

    }
  }, [user]);

  const getUser = () => {
    setUser(props.user);
  }

  const {inputs, handleInputChange, handleSubmit} = useLoginForm(getUser);


  const letUserContinue = async () => {
    ReactDom.render(
      <>
        <App user={user} />
        <ManageAccount user={user} />
      </>,
    document.getElementById('root')
    );
  };

  return (
    <fieldset>
      <legend>Verificatie</legend>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <input type="text" name="Username" className="inputfield" required  onChange={handleInputChange} value={inputs.Username} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <input type="password" name="password1" className="inputfield" required  onChange={handleInputChange} value={inputs.password1} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text id="errorMsg" className="text-muted">{errorMsg}</Form.Text>
      </Form>
    </fieldset>
  );
  
}

export default MijnAccount
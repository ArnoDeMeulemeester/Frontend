import './App.css';
import ReactDOM from 'react-dom'
import Afspeellijsten from './components/Afspeellijsten';
import LiederenLijst from './components/LiederenLijst';
import MijnAccount from './components/MijnAccount';

const App = (props) => {

  const geefAfspeellijstWeer = () => {
    ReactDOM.render(
      <>
        <App user={props.user}/>
        <Afspeellijsten user={props.user} />
      </>,
      document.getElementById('root'));
  };
  
  const geefHoofdmenuWeer = () => {
    ReactDOM.render(
      <>
        <App user={props.user}/>
        <LiederenLijst user={props.user} />
      </>,
      document.getElementById('root'));
  };

  const geefMijnAccountWeer = () => {
    ReactDOM.render(
      <>
        <App user={props.user}/>
        <MijnAccount user={props.user} />
      </>,
      document.getElementById('root'));
  };

  return (
    <header>
      <h1>Online StudentenCodex</h1>
      <nav>
        <ul>
          <li onClick={geefHoofdmenuWeer}>Home</li>
          <li onClick={geefAfspeellijstWeer}>Afspeellijsten</li>
          <li onClick={geefMijnAccountWeer}>Mijn Account</li>
        </ul>
      </nav>
    </header>
  );
}

export default App;

import App from "../App";
import { ReactDOM, useEffect } from "react";
import PlayMenu from "./PlayMenu";
import axios from "axios";
import { useRef, useState } from "react";

const Afspeellijsten = (props) => {

  useEffect(() => {

    getLiedjes();
    console.log(liedjes);

  }, []);

  const user = props.user;
  const [liedjes, setLiedjes] = useState([]);
  const [lied, setLied] = useState({
    title: '',
    page: 0,
    url: ''
  });
  
  const getLiedjes = async () => {
    setLiedjes(user.playlist);
  }
  
  const renderPlayMenu = async () => {
    ReactDOM.render(
      <>
        <App user={props.user}/>
        <PlayMenu lied={lied} user={props.user} />
      </>,
      document.getElementById('root'));
  }

  const isFirstRun = useRef(true)
    useEffect(async () => {
      if(isFirstRun.current){ // alle code in useEffect wordt uitgevoerd elke keer als lied geupdated wordt, maar niet de eerste keer
        isFirstRun.current = false;
        return;
      }
      getLiedjes();
      await renderPlayMenu();
    }, [lied]);

  const toonPlayMenu = (r, id, t, p, u) => {
    setLied({
      rating: r,
      id: id,
      title: t,
      page: p,
      url: u
    });
  }

let index = 0;

  return(
    <>
      <h1>mijn afspeellijst</h1>
      <div id='container'>
        <p></p>
            <ul>
              {liedjes.map((lied) => (
                <li key={index += 1} 
                  onClick={toonPlayMenu.bind(this, lied.rating, lied._id, lied.title, lied.page, lied.url)}
                >
                  p{lied.page}: {lied.title}
                </li>
              ))}
            </ul>
          </div>
    </>
  );
}

export default Afspeellijsten
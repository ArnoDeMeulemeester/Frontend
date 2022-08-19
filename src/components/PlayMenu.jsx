import ReactDOM from 'react-dom'
import { BiArrowBack } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'
import LiederenLijst from './LiederenLijst'
import App from '../App'
import './PlayMenu.css'
import StarRating from "./StarRating"
import axios from 'axios'

const PlayMenu = (props) => {
  
  const title = props.lied.title;
  const page = props.lied.page;
  const url = `https://www.youtube.com/embed/${props.lied.url}`;

  const pijltjeTerug = () => {
    ReactDOM.render(
      <>
        <App user={props.user}/>
        <LiederenLijst lied={props.lied} user={props.user}/>
      </>,
      document.getElementById('root'));
  }

  const addToPlaylist = async () => {
    console.log(props.user);
    await axios.put('https://arno-dm-project-api.herokuapp.com/api/users', {
      "id": props.user._id,
      "songId": props.lied.id
    });
  }

  return(
    <>
      <IconContext.Provider value = {{size: '40px'}}>
        <div ><BiArrowBack id="pijltjeTerug" onClick={pijltjeTerug}/></div>
      </IconContext.Provider>
      <div id="flexcontainer">
        <h1>{title}</h1>
        <div>Te vinden op p{page} in de Gentse studenten codex</div>
        <a href={url} target="_blank" rel="noreferrer">linkje</a>
        <iframe width="720" height="576" src={url} title="YouTube video player" 
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
        <StarRating lied={props.lied}/>
        <button id="addToPlaylist" onClick={addToPlaylist}>dit lied aan mijn playlist toevoegen</button>
      </div>
    </>
);
}

export default PlayMenu;
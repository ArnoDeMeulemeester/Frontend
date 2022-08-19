import './LiederenLijst.css'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import PlayMenu from './PlayMenu';
import App from '../App';
import ReactDOM from 'react-dom';
import { AiFillPropertySafety } from 'react-icons/ai';

  const LiederenLijst = (props) => {

    const isFirstRun = useRef(true);

    useEffect(() => {
          
      getLiedjes();

    }, []); 

    const [liedjes, setLiedjes] = useState([]);
    const [lied, setLied] = useState({
      title: '',
      page: 0,
      url: ''
    });

    const getLiedjes = async () => {
      try{
        const response = await axios.get('https://arno-dm-project-api.herokuapp.com/api/songs');
        setLiedjes(response.data.data);
      } catch(error){
        console.log(error);
      }
    };

    useEffect(() => {
      if(isFirstRun.current){
        isFirstRun.current = false;
        return;
      }
      getLiedjes();
      ReactDOM.render(
        <>
          <App user={props.user}/>
          <PlayMenu lied={lied} user={props.user} />
        </>,
        document.getElementById('root'));
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

    return(
        <>
          <div>Welkom op de Hoofdpagina</div>
          <div id='container'>
            <ul>
              {liedjes.map((lied, index = 0) => (
                <li key={index += 1} onClick={toonPlayMenu.bind(this, lied.rating, lied._id, lied.title, lied.page, lied.url)}>
                  p{lied.page}: {lied.title}
                </li>
              ))}
            </ul>
          </div>
        </>
      );
  }

export default LiederenLijst
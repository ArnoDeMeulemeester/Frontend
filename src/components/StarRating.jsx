import { useEffect, useState } from "react";
import './StarRating.css';
import {GiRoundStar} from 'react-icons/gi';
import axios from "axios";

const StarRating = (props) => {
  const [rating, setRating] = useState(props.lied.rating);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    console.log(props.lied.title + ' -> ' + props.lied.id);
    axios.put('https://arno-dm-project-api.herokuapp.com/api/songs/', {
      "id": props.lied.id,
      "rating": rating
    });
  }, [rating]);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            id="star"
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star"><GiRoundStar fontSize="1.5em" /></span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating
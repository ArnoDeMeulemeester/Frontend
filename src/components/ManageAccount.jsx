import './ManageAccount.css';
import { AiFillEdit } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import axios from 'axios';

const ManageAccount = (props) => {

  const changeName = async () => {
    const newName = prompt('nieuwe username: ')
    await axios.put('https://arno-dm-project-api.herokuapp.com/api/users/changeUsername', {
      "id": props.user._id,
      "newName": newName
    });
  };

  return(
    <>
      <IconContext.Provider  value = {{size: '20px'}}>
        <div id="flex">naam: {props.user.name} <AiFillEdit id="editIcon" onClick={changeName} /></div>
      </IconContext.Provider>
    </>
  );
}

export default ManageAccount;
import  {useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {setname} from './userreducers' 



export const App = () => {

    const [inputName, setInputName] = useState("");



    const dispatch = useDispatch();

    const name = useSelector((state)=>(state.user.name));

    function handleInputChange(event) {

        setInputName(event.target.value);

    }

    const handleSaveName = ()=>{
        dispatch(setname(inputName));

    }



  return (
    <>
    <div>
    <h1>Name : {name}</h1>


    <input type="text" placeholder="Enter your Name" value={inputName} onChange={handleInputChange}/>

    <button type="submit" onClick={handleSaveName}>click me</button>


    </div>
    </>
  )
}

export default App();

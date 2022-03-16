import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { addname } from '../redux/reducer/Reducer'
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    const [userName, setName] = useState('');
    const history = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();       
        try {
            dispatch(addname(userName))            
            history('/home')

        } catch(e)
        {
            throw(e)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Name:
                    <input type="text" name="name" onChange={(e) =>{
                         setName(e.target.value);                       
                    }}  />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login;
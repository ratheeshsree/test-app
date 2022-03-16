import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Welcome: React.FC = () => {
  const history = useNavigate();
  const name = useSelector<any>((state) => state.addUser.userName);
  useEffect(() => {
   if(name === ""){
    history('/')  
   }
  }, [])
  
  return (
    <div>Welcome {name}</div>
  )
}
export default Welcome;


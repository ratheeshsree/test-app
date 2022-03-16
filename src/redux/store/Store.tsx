import { configureStore } from '@reduxjs/toolkit'
import Reducer from '../reducer/Reducer'


export default configureStore({
  reducer:{
    addUser: Reducer,
  }
});

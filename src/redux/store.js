import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/roomsSlice';
import user from './users/usersSlice';
import roomReducer from './rooms/roomDetailSlice';

const store = configureStore(
  {
    reducer: {
      rooms: roomsReducer,
      room: roomReducer,
      user,
    },
  },
  applyMiddleware(thunk),
);

export default store;

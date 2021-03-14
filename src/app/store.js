import { configureStore } from '@reduxjs/toolkit';
import memberSlice from './memberSlice';

export default configureStore({
  reducer: {
    members: memberSlice,
  },
});

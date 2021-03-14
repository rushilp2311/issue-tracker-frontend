import { configureStore } from '@reduxjs/toolkit';
import memberSlice from './memberSlice';
import projectSlice from './projectSlice';

export default configureStore({
  reducer: {
    members: memberSlice,
    projects: projectSlice,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import memberSlice from './memberSlice';
import projectSlice from './projectSlice';
import utilsSlice from './utilSlice';

export default configureStore({
  reducer: {
    members: memberSlice,
    projects: projectSlice,
    utils: utilsSlice,
  },
});

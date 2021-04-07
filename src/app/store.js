import { configureStore } from '@reduxjs/toolkit';
import memberSlice from './memberSlice';
import projectSlice from './projectSlice';
import utilsSlice from './utilSlice';
import issuesSlice from './issuesSlice';

export default configureStore({
  reducer: {
    members: memberSlice,
    projects: projectSlice,
    utils: utilsSlice,
    issues: issuesSlice,
  },
});

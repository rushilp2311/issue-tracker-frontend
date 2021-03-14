import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { projectService, authService } from '../services';

const initialState = {
  projects: [],
  status: 'idle',
  error: null,
};

const user = authService.getCurrentUser();

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => (await projectService.getAllProjectDetails(user.company_id)).data
);

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProjects.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.projects = state.projects.concat(action.payload);
    },
    [fetchProjects.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default projectSlice.reducer;

export const selectAllProjects = (state) => state.projects.projects;

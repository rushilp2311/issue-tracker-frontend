/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { issueService } from '../services';
import store from './store';

const initialState = {
  issues: [],
  status: 'idle',
  error: null,
};
export const fetchIssues = createAsyncThunk('issues/fetchIssues', async () => {
  const state = store.getState();
  return issueService.getAllIssues(state.members.assignedProject.project_id);
});

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    issueAdded(state, action) {
      state.issues.push(action.payload);
    },
    allIssues(state, action) {
      state.issues.concat(action.payload);
    },
  },
  extraReducers: {
    [fetchIssues.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.issues = state.issues.concat(action.payload);
    },
    [fetchIssues.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchIssues.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { issueAdded } = issuesSlice.actions;

export default issuesSlice.reducer;

export const selectAllIssues = (state) => state.issues.issues;

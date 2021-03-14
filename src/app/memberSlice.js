import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { memberService, authService } from '../services';

const initialState = {
  members: [],
  status: 'idle',
  error: null,
};

const user = authService.getCurrentUser();

export const fetchMembers = createAsyncThunk(
  'members/fetchMembers',
  async () => (await memberService.getAllMembers(user.company_id)).data
);

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMembers.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchMembers.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.members = state.members.concat(action.payload);
    },
    [fetchMembers.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default memberSlice.reducer;

export const selectAllMembers = (state) => state.members.members;

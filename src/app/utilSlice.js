import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { utilService } from '../services';

const initialState = {
  status: [],
  roles: [],
  types: [],
  priority: [],
};

export const fetchUtils = createAsyncThunk('utils/fetchUtils', async () =>
  utilService.getAllUtils()
);

const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUtils.fulfilled]: (state, action) => {
      state.status = action.payload.statusList;
      state.types = action.payload.typeList;
      state.priority = action.payload.priorityList;
      state.roles = action.payload.rolesList;
    },
  },
});

export default utilsSlice.reducer;

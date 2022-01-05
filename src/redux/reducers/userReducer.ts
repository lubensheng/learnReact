import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  login
} from '../../service/index'
import {
  loginType,
} from '../../types'



const getUserInfo = createAsyncThunk(
  'getUserInfo/getUserInfoStatus',
  async (userInfo: loginType, thunkAPI) => {
    const response = await login(userInfo);
    return response.data;
  }
)

let initialState = {
  data: {}
}

const usersSlice = createSlice({
  name: 'getUserInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
        state.data = action.payload;
    });
  },
})

export default usersSlice.reducer

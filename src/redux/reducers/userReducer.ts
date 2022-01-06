import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  login
} from '../../service/index'
import {
  loginType,
} from '../../types'



export const getUserInfoAysnc = createAsyncThunk(
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
  reducers: {
    setUserInfo: (state) => {
      console.log(state);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfoAysnc.fulfilled, (state, action) => {
        state.data = action.payload;
    });
  },
})

export default usersSlice.reducer

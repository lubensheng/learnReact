import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  login
} from '../../service/index'
import {
  loginType
} from '../../types'

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userInfo: loginType, thunkAPI) => {
    const response = await login(userInfo);
    return response.data
  }
)

// Then, handle actions in your reducers:
// const usersSlice = createSlice({
//   name: 'users',
//   initialState: { entities: [], loading: 'idle' },
//   reducers: {
//     // standard reducer logic, with auto-generated action types per reducer
//   },
//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(fetchUserById.fulfilled, (state, action) => {
//       // Add user to the state array
//       state.entities.push(action.payload)
//     })
//   },
// })
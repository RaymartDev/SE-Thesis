import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import jobsReducer from './slices/jobSlice'
import { apiSlice } from './slices/apiSlice'

const store = configureStore({
    reducer: {
      auth: authReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
      jobs: jobsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export default store
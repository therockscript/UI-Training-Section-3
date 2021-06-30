import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice';

const store = configureStore({
  reducer: {
    'todo': todoSlice
    // 'meeting': meetingSlice
  }
})

export default store;
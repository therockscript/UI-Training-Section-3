import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
	const { createLogger } = require(`redux-logger`);
	const logger = createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });

	middlewares.push(logger);
}

const store = configureStore({
  reducer: {
    'todo': todoSlice
    // 'meeting': meetingSlice
  },
  middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false
		}).concat(middlewares),
	devTools: process.env.NODE_ENV === 'development'
})

export default store;
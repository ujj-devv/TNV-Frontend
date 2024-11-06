import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { leiRecordsApi } from './api/glief/lei-records.slice';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(leiRecordsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

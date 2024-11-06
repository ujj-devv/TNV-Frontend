import { combineReducers } from '@reduxjs/toolkit';
import { leiRecordsApi } from './api/glief/lei-records.slice';


const rootReducer = combineReducers({
  [leiRecordsApi.reducerPath]: leiRecordsApi.reducer, 
 
});

export default rootReducer;

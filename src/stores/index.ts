import { combineReducers } from 'redux';

import auth from './auth';
import link from './link';

const rootReducer = combineReducers({
  auth,
  link,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

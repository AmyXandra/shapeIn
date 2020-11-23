import {combineReducers} from 'redux';

import { shape } from './shape.reducer';

const rootReducer = combineReducers({
  shape,
});

export default rootReducer;
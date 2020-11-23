import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const initialState = {};
const middleware = [thunk];
// const store = createStore(rootReducer, initialState, persistReducer, applyMiddleware(...middleware));
const store = createStore(rootReducer, initialState,  applyMiddleware(...middleware));


// const persistConfig = { // configuration object for redux-persist
//     key: 'root',
//     storage, // define which storage to use
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer) 
// create a persisted reducer

// const  persistor = persistStore(store); 
// used to create the persisted store, persistor will be used in the next step

export default store

// export default store;
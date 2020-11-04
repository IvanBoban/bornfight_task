//Import nedded dependencies
import { createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import {persistReducer,persistStore} from 'redux-persist';
import rootReducer from './reducers/rootReducer'
import storage from 'redux-persist/lib/storage';
//config for persisted store (store whipes itself after page refresh, this stores it in the localStorage so the app doesn't refresh on page refresh)
const persistConfig={
    key: 'root',
    storage
}
//other part of the store persisting setup
const persistedReducer = persistReducer(persistConfig, rootReducer);
//enable redux dev tools browser extension
const composeEnhancers= (typeof window!=='undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose;
//create the store 
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
//apply persisting to the stote
const persistor= persistStore(store);
//export the store
export {store, persistor}
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { userAuthReducer } from "./userAuth/reducer";
import { reducer as formReducer } from 'redux-form'
import { usersReducer } from "./users/reducer";
import { userReducer } from "./user/reducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    auth: userAuthReducer,
    form: formReducer,
    userList: usersReducer,
    user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
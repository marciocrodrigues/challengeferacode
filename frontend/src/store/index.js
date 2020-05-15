//Criação da store e importação do reducer principal que contem todos os outros
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistReducer from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(persistReducer(rootReducer), enhancer);
const peristor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, peristor };

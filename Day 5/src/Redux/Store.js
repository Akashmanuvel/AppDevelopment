import { createStore, combineReducers } from 'redux';
import userReducers from './Reducers/userReducers';

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from local storage:', error);
    return undefined;
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    console.error('Error saving state to local storage:', error);
  }
};

const rootReducer = combineReducers({
  user: userReducers,
});

const persistedState = loadStateFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState, 
);

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;

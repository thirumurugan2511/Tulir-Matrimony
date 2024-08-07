import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import profileReducer from './profileReducer';

// Combine reducers if you have more than one
const rootReducer = combineReducers({
  profile: profileReducer,
});

const store = createStore(rootReducer);

const AppProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default AppProvider;

import { Provider } from 'react-redux';

import NavBar from './components/NavBar';
import { store } from './store/index.js';

import './App.css';

const App = () => (
  <Provider store={store}>
    <NavBar />
  </Provider>
);

export default App;
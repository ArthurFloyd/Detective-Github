import { Provider } from 'react-redux';

import NavBar from './components/NavBar';
// import HomePage from './components/Home';
// import SearchResult from './components/SearchResult.jsx';
import { store } from './store/index.js';

import './App.css';

const App = () => (
  <Provider store={store}>
    <NavBar />
    {/* // <HomePage /> */}
    {/* <SearchResult /> */}
  </Provider>
);

export default App;
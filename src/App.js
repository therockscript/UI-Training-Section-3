
import './App.css';
import ToDo from './components/ToDo/ToDo';
import { Provider } from 'react-redux'
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDo />
      </div>
    </Provider>
  );
}

export default App;


import './App.css';
import ToDo from './components/ToDo/ToDo';
import { Provider } from 'react-redux'
import store from './store/store';
import AddRegister from './components/ToDo/Body/AddRegisterForm'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDo />
         <AddRegister></AddRegister>
      </div>
    </Provider>
  );
}

export default App;

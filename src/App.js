
import './App.css';
import Message from './components/Message/Message';
import { Provider } from 'react-redux'
import store from './store/store';
import Routes from './components/Routes/Routes';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
         <Routes></Routes>
         <Message></Message>
      </div>
    </Provider>
  );
}

export default App;

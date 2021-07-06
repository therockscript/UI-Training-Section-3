
import Login from '../Login/Login';
import AddRegister from '../AddRegisterForm';
import Todo from '../ToDo/ToDo';
import PrivateRoute from './PrivateRoute';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

function Routes(props) {
    return <Router>
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <AddRegister />
        </Route>
        <PrivateRoute path="/todo">
          <Todo />
        </PrivateRoute>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
}

export default Routes;
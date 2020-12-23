
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './store/store';
import GameController from './components/GameController';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-content">
          <Router>
            <Switch>
              <Route path='/char-creation'>
                <GameController/>
              </Route>
              <Route path='/play'>

              </Route>
              <Route path='/'>
                <GameController/>
              </Route>
            </Switch>
          </Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;

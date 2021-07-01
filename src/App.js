import { HashRouter, Route, Switch } from 'react-router-dom';
import AdminConfig from './Components/AdminConfig/AdminConfig';
// import DataAccess from './Components/DataAccess/DataAccess';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Switch>
          {/* <Route path={'/'} exact component={DataAccess} /> */}
          <Route path={['/', 'config']} component={AdminConfig} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;

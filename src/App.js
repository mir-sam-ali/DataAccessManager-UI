import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminConfig from './Components/AdminConfig/AdminConfig';
import DataAccess from './Components/DataAccess/DataAccess';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Switch>
          <Route path={'/'} exact component={DataAccess} />
          <Route path={'/config'} exact component={AdminConfig} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

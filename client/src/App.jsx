import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import FormMenu from "./components/FormMenu";
import FormCreate from "./components/FormCreate";
import FormEdit from "./components/FormEdit";
import FormSearch from "./components/FormSearch";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route path="/" exact>
              <div className="content">
                <FormMenu />
              </div>
            </Route>
            <Route path="/create-player">
              <FormCreate />
            </Route>
            <Route path="/edit-player">
              <FormEdit />
            </Route>
            <Route path="/search-player">
              <FormSearch />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

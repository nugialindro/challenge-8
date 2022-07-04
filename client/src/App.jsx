import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import FormMenu from "./components/FormMenu";
import CreateForm from "./components/CreateForm";
import FormEdit from "./components/FormEdit";

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
              <CreateForm />
            </Route>
            <Route path="/edit-player">
              <FormEdit />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

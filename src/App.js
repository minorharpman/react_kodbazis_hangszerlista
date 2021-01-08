import { BrowserRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import { InstrumentListPage } from "./components/InstrumentListPage";
import { InstrumentSinglePage } from "./components/InstrumentSinglePage";
import { InstrumentCreatePage } from "./components/InstrumentCreatePage";
import { AdminListPage } from "./components/AdminListPage";
import { InstrumentEditPage } from "./components/InstrumentEditPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} activeClassName="active" exact>
                <span className="nav-link">Hangszerek</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/uj-hangszer`} activeClassName="active">
                <span className="nav-link">Új hangszer</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/adminlist`} activeClassName="active">
                <span className="nav-link">Admin lista</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={InstrumentListPage} />

        <Route path="/hangszer/:hangszerId" component={InstrumentSinglePage} />

        <Route path="/uj-hangszer" component={InstrumentCreatePage} />

        <Route path="/adminlist" exact component={AdminListPage} />

        <Route path="/editpage/:hangszerId" component={InstrumentEditPage} />
        <Redirect to={"/"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
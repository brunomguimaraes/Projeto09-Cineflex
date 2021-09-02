import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Sessions from "./Sessions";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/filme/:idFilme'>
          <Sessions />
        </Route>
        <Route exact path='/sessao/:idSessao'></Route>
        <Route exact path='/sucesso'></Route>
      </Switch>
    </Router>
  );
}
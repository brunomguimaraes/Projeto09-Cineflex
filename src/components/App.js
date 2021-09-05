import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Review from "./Review";

export default function App() {
  const [order, setOrder] = useState({});

  const saveOrder = (movie, date, time, seats, name, cpf, idSessao) => {
    setOrder({
      movie: movie,
      date: date,
      time: time,
      seats: seats,
      name: name,
      cpf: cpf,
      idSessao: idSessao
    });
  }

  const clearOrder = () => {
    setOrder({});
  }

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
        <Route exact path='/sessao/:idSessao'>
          <Seats saveOrder={saveOrder}/>
        </Route>
        <Route exact path='/sucesso'>
          <Review order={order} clearOrder={clearOrder}/>
        </Route>
      </Switch>
    </Router>
  );
}
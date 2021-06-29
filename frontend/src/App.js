import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Weddings from "./components/weddings/index";
import BirthDayParty from "./components/birthDayPart/index";
import Funerals from "./components/Funerals/index";
import DinnerParty from "./components/birthDayPart";
import Meeting from "./components/meeting";
import Login from "./components/auth/login/Login";
import Register from './components/register';
import Dashboard from "./components/dashboard/Dashboard"
import AddPlace from "./components/dashboard/AddPlace"
import EditAndDeletePlace from "./components/dashboard/editAndDeletePlace"
import Footer from "./components/footer";
const App = () => {
  return (
    <>
      <Navigation />
      <Footer />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addPlace" component={AddPlace} />
        <Route exact path="/editAndDeletePlace" component={EditAndDeletePlace} />
        <Route path="/weddings" component={Weddings} />
        <Route path="/birthDayParty" component={BirthDayParty} />
        <Route path="/funerals" component={Funerals} />
        <Route path="/dinnerParty" component={DinnerParty} />
        <Route path="/meeting" component={Meeting} />
      </Switch>
    </>
  );
};

export default App;

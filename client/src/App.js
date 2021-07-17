import { React, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Weddings from "./components/weddings/index";
import BirthDayParty from "./components/birthDayPart/index";
import Funerals from "./components/Funerals/index";
import DinnerParty from "./components/birthDayPart";
import Meeting from "./components/meeting";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/signUp/register";
import Dashboard from "./components/dashboard/Dashboard";
import AddPlace from "./components/dashboard/AddPlace";
import EditAndDeletePlace from "./components/dashboard/editAndDeletePlace";
import Footer from "./components/footer";
import Index from "./components/home/index";
import { useSelector, useDispatch } from "react-redux";
import Place from "./components/place";
import { setToken } from "./reducers/login/index";
import Favorite from "./components/favorite";
import Profile from "./components/profile/index";
import Booking from "./components/booking/index";
import SearchResult from "./components/search/SearchResult";
import About from "./components/about/index";
require("dotenv").config()
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setToken(JSON.parse(localStorage.getItem("token"))));
    }
  }, []);
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });

  return (
    <>
      <Navigation />
      {token.user.role_type === "Admin" ? (
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addPlace" component={AddPlace} />
          <Route
            exact
            path="/editAndDeletePlace"
            component={EditAndDeletePlace}
          />
        </Switch>
      ) : null}
      <>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Index} />
          <Route path="/weddings" component={Weddings} />
          <Route path="/birthDayParty" component={BirthDayParty} />
          <Route path="/funerals" component={Funerals} />
          <Route path="/dinnerParty" component={DinnerParty} />
          <Route path="/meeting" component={Meeting} />
          <Route path="/places/:placetype/:id" component={Place} />
          <Route path="/profile" component={Profile} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/booking/:id" component={Booking} />
          <Route exact path="/place/name/:name" component={SearchResult} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </>
    </>
  );
};

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Dashboard from "./Dashboard";
import User from "./User";
import Typograph from "./Typograph";
import Tablelist from "./Tablelist";
import Icon from "./Icon";
import Notification from "./Notification";
import Maps from "./Maps";
import Rtl from "./Rtl";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/User" component={User} />
        <Route exact path="/Tablelist" component={Tablelist} />
        <Route exact path="/Typograph" component={Typograph} />
        <Route exact path="/Icon" component={Icon} />
        <Route exact path="/Maps" component={Maps} />
        <Route exact path="/Notification" component={Notification} />
        <Route exact path="/Rtl" component={Rtl} />
      </Switch>
      <Footer />
    </>
  );
};
export default App;

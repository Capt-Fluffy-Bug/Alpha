import React from "react";
import "./App.css";
import SignIn from "./Components/signin.jsx";
import Navbar from "./Common/navbar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import SignUp from "./Components/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridStyles: {
    margin: 0,
  },
}));

function App() {
  const classes = useStyles();
  return (
    // <div>
    //   <Router>
    //     <div>
    //       <Switch>
    //         <Route exact path="/">
    //           <SignIn />
    //         </Route>
    //         <Route exact path="/SignUp">
    //           <SignUp />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </Router>
    <Paper style={{ height: "100vh" }}>
      <Grid Container className={classes.gridStyles}>
      <Navbar />
      <SignIn />
      {/* <SignUp /> */}
      </Grid>
    </Paper>
    // </div>
  );
}

export default App;

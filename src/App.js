import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
// import Admin from './auth/Admin';
import Register from './pages/Register';
import Login from './pages/Login';
import NavBar from './component/NavBar';
import Admin from "./pages/Admin";
import PrivateRoute from './auth/PrivateRoute';
import { AuthContext } from "./auth/AuthContext ";
import React, { useState } from "react"
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'

function App(props) {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/about" exact component={About}/>
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
    </AuthContext.Provider>

  );
}




export default App;

import {
    Switch,
    Route, Redirect, BrowserRouter,
} from "react-router-dom";
import Main from "./components/Main"
import Employees from "./components/Employees"
import Header from "./components/Header";
import React from "react";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/employees">
                    <Employees/>
                </Route>
                <Route>
                    <Redirect to={"/"}/>
                </Route>
            </Switch>
        </>
    );
}

export default App;

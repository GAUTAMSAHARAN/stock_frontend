import React from 'react';
import Main from '../components/main';
import LogIn from '../components/login';
import { Route, Switch, Redirect } from "react-router-dom";

const ROUTES = [
    { path: '/', key: "ROOT", exact: true, component: LogIn},
    {
        path: "/app",
        key: "APP",
        component: props => {
          if(sessionStorage.getItem('IsLoggedIn') == false || sessionStorage.getItem('IsLoggedIn') == undefined) {
            alert("You need to log in to access app routes");
            return <Redirect to={"/"} />;
          }else{
            return <RenderRoutes {...props} />;
          }
        },
        routes: [
            {
                path: "/app",
                key: "APP_ROOT",
                exact: true, 
                component: Main,
            }
        ]
    }
]

export default ROUTES;


function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
  }

  export function RenderRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    );
  }
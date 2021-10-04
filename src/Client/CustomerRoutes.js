import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/share/Spinner';
import {useParams} from "react-router";

const HomePage = lazy(()=>import('../Client/Pages/Home'))
const Tracteur = lazy(()=>import('../Client/Pages/Tracteur'))
const Porteur = lazy(()=>import('../Client/Pages/Porteur'))
const Semis = lazy(()=>import('../Client/Pages/Semis'))
const Divers = lazy(()=>import('../Client/Pages/Divers'))
const Pieces = lazy(()=>import('../Client/Pages/Pieces'))
const Detail = lazy(()=>import('../Client/Pages/Detail'))
const Contact = lazy(()=>import('../Client/Component/Modal'))
const Login = lazy(() => import('../app/user-pages/Login'));
const Dashboard = lazy(() => import('../app/dashboard/Dashboard'));





class AppRoutes extends Component {
    render () {
        return (
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/tracteur" component={ Tracteur } />
                    <Route exact path="/porteur" component={ Porteur } />
                    <Route exact path="/semis" component={ Semis } />
                    <Route exact path="/divers" component={ Divers } />
                    <Route exact path="/pieces" component={ Pieces } />
                    <Route exact path={'/detail/:id'} component={ Detail } />
                    <Route exact path={'/contact'} component={ Contact } />
                    <Route path="/login" component={ Login } />
                    <Route exact path="/dashboard" component={ Dashboard } />



                    <Redirect to="/" />
                </Switch>
            </Suspense>
        );
    }
}

export default AppRoutes;
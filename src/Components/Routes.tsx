import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'

const LazyRoute = ({ children, ...routeProps }: RouteProps) => (
    <Route {...routeProps}>
        <Suspense fallback={<LinearProgress />}>{children}</Suspense>
    </Route>
)

const ItemsComponent = lazy(() => import('./Items/Items'))
const CardComponent = lazy(() => import('./Cart/Cart'))
const AccountComponent = lazy(() => import('./Account/Account'))

const Routes = () => (
    <Switch>
        <LazyRoute path="/" exact>
            <ItemsComponent />
        </LazyRoute>
        <LazyRoute path="/cart" exact>
            <CardComponent />
        </LazyRoute>
        <LazyRoute path="/account" exact>
            <AccountComponent />
        </LazyRoute>
        <Route>
            <Redirect to="/" />
        </Route>
    </Switch>
)

export default Routes

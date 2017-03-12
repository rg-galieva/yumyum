import React from 'react'
import history from './history'
import { Router, Route, IndexRoute } from 'react-router'
import Layout from './pages/layout'
import IndexPage from './pages/index-page'
import ResFormPage from './pages/res-form-page'
import PlaceListPage from './pages/place-list-page'
import NoMatch from './pages/no-match'
import ConfirmContainerPage from './pages/confirm-page'

export default (
    <Router history={history}>
        <Route path="/" component={Layout}>
            <IndexRoute component={IndexPage}/>
            <Route path="/new-res" component={ResFormPage}/>
            <Route path="/places" component={PlaceListPage} />
            <Route path="*" component={NoMatch}/>
            <Route path="/confirm" component={ConfirmContainerPage}/>
        </Route>
    </Router>
)
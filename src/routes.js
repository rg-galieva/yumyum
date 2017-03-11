import React from 'react'
import history from './history'
import { Router, Route, IndexRoute } from 'react-router'
import Layout from './pages/layout'
import IndexPage from './pages/index-page'
import NoMatch from './pages/no-match'

export default (
    <Router history={history}>
        <Route path="/" component={Layout}>
            <IndexRoute component={IndexPage}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
)
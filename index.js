import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory,IndexRoute} from 'react-router'
import App from './src/app'
import Nav from './src/components/layer/nav'
import Help from './src/components/layer/help'
import Study from './src/components/layer/study'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute  component={Nav}/>
            <Route path="/study" component={Study}/>
            <Route path="/help" component={Help}/>
        </Route>
    </Router>
), document.getElementById('app'))
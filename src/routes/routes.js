import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../../src/pages/Home/index'
import EditTask from '../pages/EditTask'

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/edit/:id" exact render={(props)=>(<EditTask {...props} isNew={false} />)}/>
                <Route path="/new" exact render={(props)=>(<EditTask {...props} isNew={true} />)}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
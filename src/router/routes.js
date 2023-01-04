import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import HallOfChampions from '../pages/HallOfChampions';

const Root = () => {
    return (
        <Switch>

            <Switch>
                <App>
                    <Route path="/" exact component={Home} />
                    <Route path="/hallOfChampions" component={HallOfChampions} />
                    {/*路由不正确时，默认跳回home页面*/}
                    <Route render={() => <Redirect to="/" />} />
                </App>
            </Switch>
        </Switch>
    )
};

export default Root;
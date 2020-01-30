import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/procuct_page/product';
import Edit_Product from './pages/procuct_page/product_edit';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/product/:id" component={Product} />
            <Route path="/product_edit/:id" component={Edit_Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
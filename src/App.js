import './App.css';
import Framework from "./component/Framework";
import React from "react";
import {Route, Switch} from 'react-router-dom'

function App() {
    const PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];

    return (
        <Switch>
            <Route path='/' exact>
                home
            </Route>
            <Route path='/about'>
                about
            </Route>
            <Route>
            <Framework data={PRODUCTS}/>
            </Route>
        </Switch>
    );
}

export default App;

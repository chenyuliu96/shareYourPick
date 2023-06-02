import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShareYourPick from "./components/ShareYourPick";
import AddToCart from "./components/AddToCart";
import PictureGrid from "./components/helperComponent/PictureGrid";
import Cart from "./components/Cart";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/ShareYourPick" component={ShareYourPick} />
                <Route path="/AddToCart/:promoId" component={AddToCart} />
                <Route path="/test" component={PictureGrid} />
                <Route path="/Cart" component={Cart} />
            </Switch>

        </Router>
    );
};

export default App;
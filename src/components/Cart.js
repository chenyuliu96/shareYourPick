import React from 'react';
import PictureGrid from "./helperComponent/PictureGrid";
import {useLocation} from 'react-router-dom';
import {pictures, pictures2} from "../constant";
import '../css/Cart.css';

const Cart = () => {
    const location = useLocation();
    const asins = location.state.selectedAsins;
    const selectedAsins = pictures.concat(pictures2).filter((picture) => asins.includes(picture.id));
    const totalPrice = selectedAsins.reduce((acc, picture) => acc + picture.price, 0);
    const reduced = (totalPrice * 0.1).toFixed(2);
    return (
        <div className="Cart">
            <div className="grey-background">
                <div className="floating-container">
                    <h1>Cart</h1>
                    <PictureGrid pictures={selectedAsins}  showCheckbox={false} />
                    <div className="alert alert-light" role="alert">
                        <h5>Amazon Fresh Subtotal: ${totalPrice}</h5>
                        <h5>Promotion: ${reduced}</h5>
                        <h5>Total: <span style={{ textDecoration: 'line-through' }}>${totalPrice}</span> ${(totalPrice - reduced).toFixed(2)}</h5>
                        <button className="btn btn-warning" type="button">Checkout</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Cart;
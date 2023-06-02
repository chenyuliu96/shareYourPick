import React  from 'react';
import PictureGrid from "./helperComponent/PictureGrid";
import OrderTotal from "./helperComponent/OrderTotal";
import { useLocation } from 'react-router-dom';
import {pictures} from "../constant";

const Cart = () => {
    const location = useLocation();
    const asins = location.state.selectedAsins;
    const selectedAsins = pictures.filter((picture) => asins.includes(picture.id));
    const handlePictureSelect = (pictureId, selected) => {

    };
    return (
        <div className="Cart">
            <h1>Cart</h1>
            <PictureGrid pictures={selectedAsins} onSelect={handlePictureSelect} />
            <OrderTotal prices={[10, 20, 15, 25]}/>
        </div>

    );
};

export default Cart;
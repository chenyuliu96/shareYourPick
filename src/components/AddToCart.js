import React, { useState } from 'react';
import PictureGrid from "./helperComponent/PictureGrid";
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {pictures} from "../constant";

const AddToCart = () => {
    const {promoId} = useParams();  //TODO promoId should come from database query

    const history = useHistory();
    const [selectedAsins, setSelectedAsins] = useState([]);
    let asinsFromPromoId = '';

    const handleGetPromoAsins = () => {
        //TODO GET picked asin by promoId
        fetch('http://localhost:8000/api/getPickedAsins', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                promoUrl: promoId,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                asinsFromPromoId = "response.something";//TODO
                console.log(data); // Handle the response from the server
            })
            .catch((error) => {
                console.error('Error:', error); // Handle any errors that occurred during the request
            });
    };

    const handlePictureSelect = (asin, selected) => {
        if (selected) {
            setSelectedAsins((prevSelectedAsins) => [
                ...prevSelectedAsins,
                asin,
            ]);
            console.log(`Picture ${asin} selected`);
        } else {
            setSelectedAsins((prevSelectedAsins) =>
                prevSelectedAsins.filter((id) => id !== asin)
            );
            console.log(`Picture ${asin} deselected`);
        }
    };


    const handleRedirect = () => {
        console.log(selectedAsins);
        history.push("/Cart", {selectedAsins}
    );

    };

    return (
        <div className="AddToCart">
            <h1>Add To Cart To Enjoy a 10% off</h1>
            {/*TODO The displayed asins are hard coded for now, we need to query database to get the list of asins in promotion*/}
            <PictureGrid pictures={pictures} onSelect={handlePictureSelect} />
            <button onClick={handleRedirect}>Add To Cart</button>
        </div>

    );
};

export default AddToCart;
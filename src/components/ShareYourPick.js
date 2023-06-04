import React, {useState} from 'react';
import PictureGrid from "./helperComponent/PictureGrid";
import {useParams} from "react-router-dom";
import {order} from "../constant";

const ShareYourPick = () => {
    const [selectedAsins, setSelectedAsins] = useState([]);
    const [showTextBox, setShowTextBox] = useState(false);
    const {orderId} = useParams();  //TODO promoId should come from database query
    const promoLink = "http://localhost:3000/AddToCart/" + orderId;
    let pictureList = order[`${orderId}`];

    const handleSelect = (asin, selected) => {
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

    const handleFormSubmit = () => {
        if (selectedAsins) {
            //TODO post asin
            fetch('http://localhost:8000/api/putMyPicks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ asin: selectedAsins }),
            })
                .then((response) => response.json())
                .then((data) => {
                    //TODO display the urlLink as a pop up window
                    console.log("data: ", data); // Handle the response from the server
                })
                .catch((error) => {
                    console.error('Error:', error); // Handle any errors that occurred during the request
                });
        }
        setShowTextBox(true); //TODO Move this up to line 58 once we can get a real promo link from database
    };

    return (
        <div className="ShareYourPick">
            <div className="grey-background">
                <div className="floating-container">
                    <h1>Share Your Pick</h1>
                    <h2>They get 10% off for your recommended Items</h2>
                    <PictureGrid pictures={pictureList} onSelect={handleSelect} showCheckbox={true} />
                    <button className="btn btn-warning" type="button" onClick={handleFormSubmit}>Generate Link</button>
                    {showTextBox ? (
                        <div className="alert alert-primary" role="alert">
                             Share this promo link <a href={promoLink} className="alert-link">{promoLink}</a>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>

    );
};

export default ShareYourPick;
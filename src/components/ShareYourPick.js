import React, {useState} from 'react';
import {pictures} from "../constant";
import PictureGrid from "./helperComponent/PictureGrid";

const ShareYourPick = () => {
    const [selectedAsins, setSelectedAsins] = useState([]);

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
                    console.log(data); // Handle the response from the server
                })
                .catch((error) => {
                    console.error('Error:', error); // Handle any errors that occurred during the request
                });
        }
    };

    return (
        <div className="ShareYourPick">
            <h1>Share with Friend: they get 10% off for if they purchase your recommended Item</h1>
            <PictureGrid pictures={pictures} onSelect={handleSelect} />
            <button onClick={handleFormSubmit}>GenerateALink</button>
        </div>
    );
};

export default ShareYourPick;
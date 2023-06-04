import React from 'react';
import '../../css/PictureRow.css'; // Import CSS file for styling
import PictureItem from "./PictureItem";

const PictureRow = ({pictures, onSelect}) => {

    return (
        <div className="picture-row">
            {pictures.map((picture) => (
                <PictureItem picture={picture} onSelect={onSelect} showCheckbox={false}/>
            ))}
        </div>
    );

}

export default PictureRow;
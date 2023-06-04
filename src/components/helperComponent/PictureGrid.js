import React from 'react';
import '../../css/PictureGrid.css'; // Import CSS file for styling
import PictureItem from "./PictureItem";

const PictureGrid = ({pictures, onSelect, showCheckbox}) => {
    return (
        <div className="picture-grid">
            {pictures.map((picture) => (
                <PictureItem showCheckbox={showCheckbox} picture={picture} onSelect={onSelect} />
            ))}
        </div>
    );
}

export default PictureGrid;
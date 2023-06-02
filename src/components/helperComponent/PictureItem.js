import React, { useState } from 'react';

const PictureItem = ({ picture, onSelect }) => {
    const [selected, setSelected] = useState(false);

    const handleCheckboxChange = () => {
        const updatedSelected = !selected;
        setSelected(updatedSelected);
        onSelect(picture.id, updatedSelected);
    };

    return (
        <div className="picture-item">
            <img src={process.env.PUBLIC_URL + picture.url} alt={picture.title} />
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    checked={selected}
                    onChange={handleCheckboxChange}
                />
            </div>
        </div>
    );
};

export default PictureItem;
import React, { useState } from 'react';

const ImageUrlInput = ({ onUrlSubmit }) => {
    const [url, setUrl] = useState('');

    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (url) {
            onUrlSubmit(url);
            setUrl('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <input
                type="text"
                value={url}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="border rounded p-2 flex-grow"
            />
            <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
                Submit
            </button>
        </form>
    );
};

export default ImageUrlInput;
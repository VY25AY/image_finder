import React, { useState } from 'react';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (validTypes.includes(file.type)) {
                setSelectedFile(file);
                setError('');
            } else {
                setError('Please select a valid image file (JPEG, PNG, GIF).');
            }
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Implement the upload logic here
            console.log('Uploading:', selectedFile);
        }
    };

    return (
        <div className="image-upload">
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {error && <p className="error">{error}</p>}
            {selectedFile && (
                <div>
                    <p>Selected file: {selectedFile.name}</p>
                    <button onClick={handleUpload}>Upload</button>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
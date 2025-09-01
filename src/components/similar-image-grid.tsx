import React from 'react';

interface SimilarImageGridProps {
    images: string[];
}

const SimilarImageGrid: React.FC<SimilarImageGridProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
                <div key={index} className="relative">
                    <img src={image} alt={`Similar image ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
                </div>
            ))}
        </div>
    );
};

export default SimilarImageGrid;
import React from 'react';
import ImageUpload from '../components/image-upload';
import ImageUrlInput from '../components/image-url-input';
import SearchResultsGrid from '../components/search-results-grid';
import SimilarImageGrid from '../components/similar-image-grid';
import ParticleBackground from '../components/particle-background';
import FloatingElements from '../components/floating-elements';

const Page = () => {
    return (
        <div className="relative overflow-hidden">
            <ParticleBackground />
            <FloatingElements />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center mb-8">Visual Discovery Platform</h1>
                <ImageUpload />
                <ImageUrlInput />
                <SearchResultsGrid />
                <SimilarImageGrid />
            </div>
        </div>
    );
};

export default Page;
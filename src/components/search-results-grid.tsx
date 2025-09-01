import React from 'react';

interface SearchResult {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
}

interface SearchResultsGridProps {
    results: SearchResult[];
}

const SearchResultsGrid: React.FC<SearchResultsGridProps> = ({ results }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map(result => (
                <div key={result.id} className="border rounded-lg overflow-hidden shadow-lg">
                    <img src={result.imageUrl} alt={result.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{result.title}</h3>
                        <p className="text-gray-600">{result.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResultsGrid;
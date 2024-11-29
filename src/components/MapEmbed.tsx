// src/components/MapEmbed.tsx
import React from 'react';

const MapEmbed = ({ url }: { url: string }) => {
    return (
        <div style={{ height: '800px', width: '100%' }}>
            <iframe 
                src={url} 
                width="100%" 
                height="100%" 
                title="Map Embed"
            ></iframe>
        </div>
    );
};

export default MapEmbed;

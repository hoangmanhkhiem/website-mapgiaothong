'use client';
import React from 'react';
import MapEmbed from '@/components/MapEmbed';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';


const Data1 = () => {
    const geoJsonUrl = "https://yennhiptit.github.io/map-web-1/";
    const router = useRouter();

    const handleBackClick = () => {
        router.push('/');
    };
        

    return (
        <div>
            <Button variant="primary" onClick={handleBackClick}>Primary</Button>
            <MapEmbed url={geoJsonUrl} />
        </div>
    );
};

export default Data1;
import React from 'react';
import ImageGallery from 'react-image-gallery';


function GalleryPage () {
    const images = [
        {
            original: 'images/eiffel-tower-night-lights.jpg',
            thumbnail: 'images/eiffel-tower-night-lights.jpg',
            description: `Eiffel tower lit up at night`,
            originalHeight: '450px',
        },
        {
          original: 'images/amsterdam-canal.jpg',
          thumbnail: 'images/amsterdam-canal.jpg',
          description: `An Amsterdam canal surrounded by bikes and trees`,
          originalHeight: '450px',
        },
        {
            original: 'images/leo-mountain-top-portrait.jpg',
            thumbnail: 'images/leo-mountain-top-portrait.jpg',
            description: `Leo posing on a mountain top`,
            originalHeight: '450px',
        },
        {
            original: 'images/cooking-class-tarts.jpg',
            thumbnail: 'images/cooking-class-tarts.jpg',
            description: `Two tarts, one sweet, one savory, made in a cooking class`,
            originalHeight: '450px',
        },
        {
            original: 'images/ceramic-mug-latte-art.jpg',
            thumbnail: 'images/ceramic-mug-latte-art.jpg',
            description: `A flat white coffe drink with foam art in a handmade ceramic mug`,
            originalHeight: '450px',
        },
        {
            original: 'images/NY-brooklyn-bridge-world-trade.jpg',
            thumbnail: 'images/NY-brooklyn-bridge-world-trade.jpg',
            description: `The brooklyn bridge and world trade center pictured from across the river`,
            originalHeight: '450px',
        },
        {
            original: 'images/hawaii-ocean-rainbow.jpg',
            thumbnail: 'images/hawaii-ocean-rainbow.jpg',
            description: `A rainbow seen next to the ocean in Maui`,
            originalHeight: '450px',
        },
        {
            original: 'images/london-tower-bridge.jpg',
            thumbnail: 'images/london-tower-bridge.jpg',
            description: `The London Tower Bridge seen from the shore`,
            originalHeight: '450px',
        },
        {
            original: 'images/riomaggiore-ocean-view.jpg',
            thumbnail: 'images/riomaggiore-ocean-view.jpg',
            description: `Riomaggiore village seen from an ocean kayak`,
            originalHeight: '450px',
        },
        {
            original: 'images/vatican-city.jpg',
            thumbnail: 'images/vatican-city.jpg',
            description: `Vatican City at sunset seen from a bridge`,
            originalHeight: '450px',
        },
    ]
    return(
        <>
            <h2>Photo Gallery</h2>
            <article>
            <ImageGallery items={images} />
            </article>
        </>
    )
}

export default GalleryPage;

import React from 'react';
import ReactImageZoom from 'react-image-zoom';

const ImageZoom = ({img}) => {
    const props = {width: 500, zoomWidth: 500, img: img,zoomPosition:'original'};
    return (
        <div className=''>
            <ReactImageZoom  {...props} />
        </div>
    );
};

export default ImageZoom;
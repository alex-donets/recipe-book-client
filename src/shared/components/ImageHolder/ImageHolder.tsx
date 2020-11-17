import React from 'react';
import { ImageHolderTypes } from "../../../modules/categories/types";

const ImageHolder = ({ children }: ImageHolderTypes) => {
    return (
        <div className="image-holder">
            {children}
        </div>
    );
};

export default ImageHolder;

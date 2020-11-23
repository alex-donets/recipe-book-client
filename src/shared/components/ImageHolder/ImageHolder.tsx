import React from 'react';
import { ImageHolderTypes } from "../../../modules/categories/types";

const ImageHolder = ({ children, className }: ImageHolderTypes) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default ImageHolder;

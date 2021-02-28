import React, { BaseSyntheticEvent, SyntheticEvent, useState } from 'react';
import './styles.scss';
import { Card, Placeholder } from 'semantic-ui-react';
import ImageHolder from '../ImageHolder/ImageHolder';
import { CategoryCardTypes } from './types';
import DefaultImage from '../../../assets/default-image.png';

const CategoryCard = ({ id, title, photoUrl, isSelected, onSelect }: CategoryCardTypes) => {
    const [isShowLoadImg, setIsShowLoadImg] = useState(true);

    const handleOnError = (e: BaseSyntheticEvent) => {
        e.target.src = DefaultImage;
        e.target.error = null;
    };

    const handleOnLoad = (e: SyntheticEvent) => {
        setIsShowLoadImg(false);
    };

    return (
        <div className="category-card-holder" id={id}>
            <Card onClick={() => onSelect && onSelect(id)} color={isSelected ? 'green' : undefined}>
                <ImageHolder className="category-img-holder">
                    {isShowLoadImg && (
                        <Placeholder className="placeholder-category">
                            <Placeholder.Image square />
                        </Placeholder>
                    )}

                    <img src={photoUrl} alt={title} onError={handleOnError} onLoad={handleOnLoad} />
                </ImageHolder>

                <Card.Content textAlign="center" header={title} />
            </Card>
        </div>
    );
};

export default CategoryCard;

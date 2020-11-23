import React from 'react';
import './styles.scss';
import { Card } from "semantic-ui-react";
import ImageHolder from "../ImageHolder/ImageHolder";
import { CategoryCardTypes } from "./types";

const CategoryCard = ({
    id,
    title,
    photoUrl,
    isSelected,
    onSelect
}: CategoryCardTypes) => {
    return (
        <div className="category-card-holder">
            <Card
                onClick={() => onSelect && onSelect(id)}
                color={isSelected ? 'green' : undefined}
            >
                <ImageHolder className="category-img-holder">
                    <img src={photoUrl} alt={title} />
                </ImageHolder>

                <Card.Content
                    textAlign='center'
                    header={title}
                />
            </Card>
        </div>
    );
};

export default CategoryCard;

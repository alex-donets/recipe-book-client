import React from 'react';
import './styles.scss';
import { Card, Placeholder } from 'semantic-ui-react';
import ImageHolder from '../ImageHolder/ImageHolder';
import DefaultImage from '../../../assets/default-image.png';

const CategoryCardLoaded = () => {
    const title = 'Loading...';

    return (
        <div className="category-card-holder">
            <Card>
                <ImageHolder className="category-img-holder">
                    <Placeholder className="placeholder-category">
                        <Placeholder.Image square />
                    </Placeholder>

                    <img src={DefaultImage} alt={title} />
                </ImageHolder>

                <Card.Content textAlign="center" header={title} className="placeholder-title" />
            </Card>
        </div>
    );
};

export default CategoryCardLoaded;

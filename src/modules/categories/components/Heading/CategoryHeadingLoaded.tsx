import React from 'react';
import { Card } from "semantic-ui-react";
import CategoryCardLoaded from "../../../../shared/components/CategoryCard/CategoryCardLoaded";

const CategoryHeadingLoaded = () => {
    const emptyList = [1, 2, 3, 4, 5, 6];
    return (
        <Card.Group centered>
            {emptyList.map((item) => <CategoryCardLoaded key={item} />)}
        </Card.Group>
    );
};

export default CategoryHeadingLoaded;

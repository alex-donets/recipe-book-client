import React from 'react';

import {Divider, Grid, Header} from "semantic-ui-react";
import {recipePhotoUrl} from "../../../../backend/constants";
import {RecipeItemTypes} from "../../types";

const RecipeItem = ({
    item,
    showDivider
}: RecipeItemTypes) => {
    return (
        <Grid key={item._id} textAlign="center">
            <Grid.Row>
                <Header as='h3'>{item.name}</Header>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={5} className="recipe-img-holder">
                    <img src={recipePhotoUrl + item._id} alt={item.name} />
                </Grid.Column>
                <Grid.Column width={11} textAlign="left">
                    {item.directions}
                </Grid.Column>
            </Grid.Row>

            {showDivider && (
                <Divider />
            )}
        </Grid>
    );
};

export default RecipeItem;

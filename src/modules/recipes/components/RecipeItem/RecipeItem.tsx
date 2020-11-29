import React from 'react';
import '../../styles.scss'

import {Button, Divider, Grid, Header, List} from "semantic-ui-react";
import {recipePhotoUrl} from "../../../../backend/constants";
import {RecipeItemTypes} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {getUserId} from "../../../auth/selectors";
import {setDeleteDialogIsVisible, setEditMode, setSelectedRecipe} from "../../actions";
import useReactRouter from "use-react-router";

const RecipeItem = ({
    item,
    showDivider
}: RecipeItemTypes) => {
    const dispatch = useDispatch();

    const { history } = useReactRouter();

    const userId = useSelector(getUserId);
    const showMore = item.directions.length > 635;

    const handleOnUpdate = (id: string) => {
        dispatch(setSelectedRecipe(id));
        dispatch(setEditMode(true));
        history.push('/recipes');
    };

    const handleOnDelete = (id: string) => {
        dispatch(setSelectedRecipe(id));
        dispatch(setDeleteDialogIsVisible(true));
    };

    return (
        <Grid key={item._id} textAlign="center">
            <Grid.Row>
                <Header as='h3' className="headerHolder">{item.name}</Header>
            </Grid.Row>

            <Grid.Row className="directions-holder">
                <Grid.Column as="a" href={`/recipes/${item.categoryId}/${item._id}`} width={5} className="recipe-img-holder">
                    <img src={recipePhotoUrl + item._id} alt={item.name} />
                </Grid.Column>

                <Grid.Column width={11} textAlign="justified">
                    <Grid.Row className="directions-content">
                        {item.directions}
                    </Grid.Row>

                    {showMore && (
                        <Grid.Row as="a" href={`/recipes/${item.categoryId}/${item._id}`} className="directions-more">
                            Read more...
                        </Grid.Row>
                    )}

                    {item.userId === userId && (
                        <Grid.Row className="directions-btns">
                            <Button icon='pencil' onClick={() => handleOnUpdate(item._id)}/>
                            <Button icon='trash alternate' onClick={() => handleOnDelete(item._id)} />
                        </Grid.Row>
                    )}
                </Grid.Column>
            </Grid.Row>

            {showDivider && (
                <Divider />
            )}
        </Grid>
    );
};

export default RecipeItem;

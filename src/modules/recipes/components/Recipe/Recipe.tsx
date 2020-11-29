import React, {useEffect} from 'react';
import { Grid, Header, Segment } from "semantic-ui-react";
import { useParams } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getRecipeList, getSelectedRecipe} from "../../selectors";
import { isEmpty } from 'lodash';
import { fetchRecipes } from "../../actions";
import {recipePhotoUrl} from "../../../../backend/constants";

const Recipe = () => {
    const dispatch = useDispatch();

    // @ts-ignore
    const { categoryId, recipeId } = useParams();

    const recipeList = useSelector(getRecipeList);
    const recipe = recipeList.find(item => item._id === recipeId);

    useEffect(() => {
        if (isEmpty(recipeList)) {
            dispatch(fetchRecipes(categoryId));
        }
    }, []);

    return (
        recipe ? (
            <div className="recipe-content">
                <Header as="h2" className="primary-text">
                    {recipe && recipe.name}
                </Header>

                <Segment padded>
                    <Grid stackable padded>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <img src={recipePhotoUrl + recipe._id} alt={recipe.name} />
                            </Grid.Column>
                            <Grid.Column width={8}>

                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='justified'>
                                {recipe.directions}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        ) : (
            <div className="recipe-content">
                <Header as="h2" className="primary-text">
                    Recipe not found
                </Header>
            </div>
        )

    );
};

export default Recipe;

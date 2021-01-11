import React, { BaseSyntheticEvent, lazy, Suspense, useEffect, useState } from 'react';
import { Button, Grid, Header, Placeholder, Segment, Table } from 'semantic-ui-react';
import '../../styles.scss';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getIsDeleteDialogVisible, getRecipeList, getRecipeListLoading } from '../../selectors';
import { isEmpty } from 'lodash';
import { deleteRecipe, fetchRecipes, setDeleteDialogIsVisible, setEditMode, setSelectedRecipe } from '../../actions';
import { recipePhotoUrl } from '../../../../backend/constants';
import { ParamTypes } from '../../types';
import CircularProgress from '../../../../shared/components/CircularProgress/CircularProgress';
import DefaultImage from '../../../../assets/default-image.png';
import { fillIngredientsList } from '../../../ingredients/actions';
import useReactRouter from 'use-react-router';
import { Recipe as RecipeTypes } from '../../types';
import { getUserId } from '../../../auth/selectors';

const ConfirmationModal = lazy(() => import('../../../../shared/components/ConfirmationModal/ConfirmationModal'));

const Recipe = () => {
    const dispatch = useDispatch();

    const [isShowLoadImg, setIsShowLoadImg] = useState(true);

    const { history } = useReactRouter();
    const { categoryId, recipeId } = useParams<ParamTypes>();

    const recipeList = useSelector(getRecipeList);
    const isListLoading = useSelector(getRecipeListLoading);
    const userId = useSelector(getUserId);
    const isDeleteDialogVisible = useSelector(getIsDeleteDialogVisible);
    const recipe = recipeList ? recipeList.find((item) => item._id === recipeId) : null;

    useEffect(() => {
        if (isEmpty(recipeList)) {
            dispatch(fetchRecipes(categoryId));
        }
    }, []);

    const handleOnError = (e: BaseSyntheticEvent) => {
        e.target.src = DefaultImage;
        e.target.error = null;
    };

    const handleOnLoad = () => {
        setIsShowLoadImg(false);
    };

    const handleOnUpdate = (item: RecipeTypes) => {
        dispatch(setSelectedRecipe(item._id));
        dispatch(setEditMode(true));
        dispatch(fillIngredientsList(item.ingredients));
        history.push('/recipes');
    };

    const handleOnDelete = (id: string) => {
        dispatch(setSelectedRecipe(id));
        dispatch(setDeleteDialogIsVisible(true));
    };

    const onConfirm = () => {
        dispatch(deleteRecipe(recipe._id));
        history.push('/');
        dispatch(setDeleteDialogIsVisible(false));
    };

    const onDiscard = () => {
        dispatch(setDeleteDialogIsVisible(false));
    };

    return recipe ? (
        <div className="recipe-content">
            <Header as="h2" className="primary-text">
                {recipe && recipe.name}
            </Header>

            <Segment padded>
                <Grid stackable padded>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            {isShowLoadImg && (
                                <Placeholder>
                                    <Placeholder.Image square />
                                </Placeholder>
                            )}

                            <img
                                src={recipePhotoUrl + recipe._id}
                                alt={recipe.name}
                                onError={handleOnError}
                                onLoad={handleOnLoad}
                                className="recipe-img"
                            />
                        </Grid.Column>

                        <Grid.Column width={8}>
                            <Header as="h3" className="primary-text">
                                Ingredients
                            </Header>

                            <Table className="ui very basic table unstackable ingredient">
                                <Table.Body>
                                    {recipe.ingredients.map(({ id, name, quantity, measure }) => (
                                        <Table.Row key={id}>
                                            <Table.Cell className="ingredient-name">{name}</Table.Cell>
                                            <Table.Cell className="right aligned collapsing">{quantity}</Table.Cell>
                                            <Table.Cell className="collapsing">{measure}</Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column textAlign="justified" className="directions">
                            {recipe.directions}
                        </Grid.Column>
                    </Grid.Row>

                    {recipe.userId === userId && (
                        <Grid.Row className="ui recipe-btns-holder">
                            <Button icon="pencil" onClick={() => handleOnUpdate(recipe)} />
                            <Button icon="trash alternate" onClick={() => handleOnDelete(recipe._id)} />
                        </Grid.Row>
                    )}
                </Grid>
            </Segment>

            <Suspense fallback={CircularProgress}>
                {isDeleteDialogVisible && (
                    <ConfirmationModal
                        title="Deleting a recipe"
                        content="Please confirm deleting this recipe"
                        onConfirm={onConfirm}
                        onDiscard={onDiscard}
                    />
                )}
            </Suspense>
        </div>
    ) : (
        <div className="recipe-content">
            {!isListLoading && (
                <Header as="h2" className="primary-text">
                    Recipe not found
                </Header>
            )}

            {isListLoading && <CircularProgress />}
        </div>
    );
};

export default Recipe;

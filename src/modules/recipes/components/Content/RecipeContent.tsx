import React, { useEffect, useRef } from 'react';
import '../../styles.scss';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { Formik } from 'formik';
import { addValidationSchema, formInitialValues, updateValidationSchema } from '../Form/constants';

import RecipeForm from '../Form/RecipeForm';
import { trimFormValues } from '../../../../utils/helpers';
import { addRecipe, clear as clearRecipe, updateRecipe } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { getIsEditMode, getSelectedRecipe, getSelectedRecipeId } from '../../selectors';
import { queryToForm } from '../../helpers';
import { QueryAddRecipe, QueryUpdateRecipe, RecipeFormValues } from '../../types';
import { FormikProps } from 'formik/dist/types';
import { IngredientFormValues } from '../../../ingredients/types';
import { addIngredient, clear as clearIngredients } from '../../../ingredients/actions';
import { reset } from 'redux-form';

const RecipeContent = () => {
    const dispatch = useDispatch();

    const formRef = useRef(null);

    const isEditMode = useSelector(getIsEditMode);
    const selectedRecipeId = useSelector(getSelectedRecipeId);

    const selectedRecipe = useSelector(getSelectedRecipe);

    useEffect(() => {
        const { current } = formRef;

        if (current && !selectedRecipeId) {
            current.resetForm();
        }

        if (current && isEditMode && selectedRecipe) {
            current.setValues({ ...queryToForm(selectedRecipe) });
        }
    }, [selectedRecipeId]);

    useEffect(() => {
        return () => {
            dispatch(clearRecipe());
            dispatch(clearIngredients());
        }
    }, []);

    const renderForm = (props: FormikProps<RecipeFormValues>) => (
        <RecipeForm {...props} submitIngredients={submitIngredients} />
    );

    const submitRecipe = (formData: QueryAddRecipe & QueryUpdateRecipe) => {
        const formDataPayload = trimFormValues(formData);

        const resultAction = selectedRecipe ? updateRecipe : addRecipe;

        dispatch(resultAction(formDataPayload));
    };

    const submitIngredients = (formData: IngredientFormValues) => {
        dispatch(addIngredient(formData));
        dispatch(reset('IngredientsForm'));
    };

    return (
        <div className="recipe-content">
            <Header as="h2" className="primary-text">
                {selectedRecipe ? 'Update ' : 'Create '} a recipe
            </Header>

            <Segment padded>
                <Grid stackable padded>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h3" className="primary-text">
                                Recipe
                            </Header>

                            <Formik
                                ref={formRef}
                                render={renderForm}
                                initialValues={formInitialValues}
                                onSubmit={submitRecipe}
                                validationSchema={isEditMode ? updateValidationSchema : addValidationSchema}
                                enableReinitialize
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
};

export default RecipeContent;

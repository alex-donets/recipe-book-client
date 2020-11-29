import React, {useEffect, useRef} from 'react';
import "../../styles.scss";
import {Grid, Header, Segment} from "semantic-ui-react";
import {Formik} from "formik";
import {addValidationSchema, formInitialValues, updateValidationSchema} from "../Form/constants";

import RecipeForm from "../Form/RecipeForm";
import {trimFormValues} from "../../../../utils/helpers";
import {addRecipe, updateRecipe} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {
    getIsEditMode,
    getPreviewTitle,
    getPreviewUrl,
    getSelectedRecipe,
    getSelectedRecipeId
} from "../../selectors";
import {queryToForm} from "../../helpers";
import {RecipeFormValues} from "../../types";
import {FormikProps} from "formik/dist/types";

const RecipeContent = () => {
    const dispatch = useDispatch();

    const formRef = useRef(null);

    const isEditMode = useSelector(getIsEditMode);
    const selectedRecipeId = useSelector(getSelectedRecipeId);

    const selectedRecipe = useSelector(getSelectedRecipe);

    useEffect(() => {
        const { current } = formRef;

        if (current && !selectedRecipeId) {
            // @ts-ignore
            current.resetForm();
        }

        if (current && isEditMode && selectedRecipe) {
            // @ts-ignore
            current.setValues({ ...queryToForm(selectedRecipe) });
        }
    }, [selectedRecipeId]);

    const renderForm = (props: FormikProps<RecipeFormValues>) => <RecipeForm {...props} />;

    const handleOnSubmit = (formData: RecipeFormValues) => {
        const formDataPayload = trimFormValues(formData);

        const resultAction = selectedRecipe
            ? updateRecipe
            : addRecipe;

        dispatch(resultAction(formDataPayload));
    };

    return (
        <div className="recipe-content">
            <Header as="h2" className="primary-text">
                {selectedRecipe ? 'Update ': 'Create '} a recipe
            </Header>

            <Segment padded>
                <Grid stackable padded>
                    <Grid.Row>
                        <Grid.Column padded>
                            <Formik
                                ref={formRef}
                                render={renderForm}
                                initialValues={formInitialValues}
                                onSubmit={handleOnSubmit}
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

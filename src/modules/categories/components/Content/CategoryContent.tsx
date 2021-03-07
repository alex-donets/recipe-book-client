import React, { useEffect, useRef } from 'react';
import '../../styles.scss';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { Formik } from 'formik';
import { addValidationSchema, formInitialValues, updateValidationSchema } from '../Form/constants';
import CategoryCard from '../../../../shared/components/CategoryCard/CategoryCard';
import CategoryForm from '../Form/CategoryForm';
import { trimFormValues } from '../../../../utils/helpers';
import { addCategory, updateCategory } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCategoryUpdatedAt,
    getIsEditMode,
    getPreviewTitle,
    getPreviewUrl,
    getSelectedCategory,
    getSelectedCategoryId,
} from '../../selectors';
import { queryToForm } from '../../helpers';
import { categoryPhotoUrl } from '../../../../services/constants';
import DefaultIcon from '../../../../assets/plus.svg';
import { CategoryAddValues, CategoryFormValues } from '../../types';
import { FormikProps } from 'formik/dist/types';

const CategoryContent = () => {
    const dispatch = useDispatch();

    const formRef = useRef(null);
    const divRef = useRef(null);

    const isEditMode = useSelector(getIsEditMode);
    const selectedCategoryId = useSelector(getSelectedCategoryId);
    const updatedAt = useSelector(getCategoryUpdatedAt);

    const selectedCategory = useSelector(getSelectedCategory);
    const previewURL = useSelector(getPreviewUrl);
    const previewTitle = useSelector(getPreviewTitle);

    const photoUrl = selectedCategoryId ? categoryPhotoUrl + selectedCategoryId + '/' + updatedAt : null;
    const title = selectedCategory ? selectedCategory.name : 'Add New';

    useEffect(() => {
        const { current } = formRef;

        if (current && !selectedCategoryId) {
            current.resetForm();
        }

        if (current && isEditMode && selectedCategory) {
            current.setValues({ ...queryToForm(selectedCategory) });
            divRef.current && divRef.current.scrollIntoView();
        }

        return () => window.scrollTo(0, 0);
    }, [selectedCategoryId]);

    const renderForm = (props: FormikProps<CategoryFormValues>) => <CategoryForm {...props} />;

    const handleOnSubmit = (formData: CategoryFormValues | CategoryAddValues) => {
        const formDataPayload = trimFormValues(formData);

        const resultAction = selectedCategory ? updateCategory : addCategory;

        dispatch(resultAction(formDataPayload));
    };

    return (
        <div className="category-content" ref={divRef}>
            <Header as="h2" className="primary-text">
                {selectedCategory ? 'Update ' : 'Create '} a category
            </Header>

            <Segment padded>
                <Grid columns={2} stackable padded>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <Formik
                                ref={formRef}
                                render={renderForm}
                                initialValues={formInitialValues}
                                onSubmit={handleOnSubmit}
                                validationSchema={isEditMode ? updateValidationSchema : addValidationSchema}
                                enableReinitialize
                            />
                        </Grid.Column>

                        <Grid.Column width={5} className="preview-holder">
                            <Header as="h3" textAlign="center">
                                Preview
                            </Header>

                            <CategoryCard
                                key={selectedCategoryId}
                                id={selectedCategoryId}
                                title={previewTitle || title}
                                photoUrl={previewURL || photoUrl || DefaultIcon}
                                isSelected={false}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
};

export default CategoryContent;

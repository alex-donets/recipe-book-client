import React, { useRef } from 'react';
import { Card, Container } from "semantic-ui-react";
import { Formik} from "formik";

import CategoryForm from "./components/Form/CategoryForm";
import { trimFormValues } from "../../utils/helpers";

import { useDispatch } from "react-redux";
import { formInitialValues, formValidationSchema } from "./components/Form/constants";
import { addCategory } from "./actions";

const Categories = () => {
    const dispatch = useDispatch();

    const renderForm = (props: any) => <CategoryForm {...props} />;

    const handleOnSubmit = (formData: any) => {
        const formDataPayload = trimFormValues(formData);

        dispatch(addCategory(formDataPayload));
    };

    return (
        <Card fluid>
            <Container className="create-category-container">
                <Formik
                    render={renderForm}
                    initialValues={formInitialValues}
                    onSubmit={handleOnSubmit}
                    validationSchema={formValidationSchema}
                    enableReinitialize
                />
            </Container>
        </Card>
    );
};

export default Categories;

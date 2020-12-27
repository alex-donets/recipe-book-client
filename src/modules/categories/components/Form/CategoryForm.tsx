import React, { BaseSyntheticEvent, useRef } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import BtnSection from '../BtnSection/BtnSection';
import { setPreviewCard } from '../../actions';
import { CategoryFormValues } from '../../types';
import { FormikProps } from 'formik/dist/types';

const CategoryForm = (props: FormikProps<CategoryFormValues>) => {
    const dispatch = useDispatch();

    const {
        values: { name, photo },
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldValue,
    } = props;

    const fileInputRef = useRef<HTMLInputElement>(null);

    const fileChange = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];

        if (file) {
            reader.onloadend = () => {
                const data = {
                    photo: file,
                    previewUrl: reader.result,
                };
                dispatch(setPreviewCard(data));
            };
            reader.readAsDataURL(file);
        }

        setFieldValue('photo', e.currentTarget.files[0]);
    };

    const handleClick = () => {
        const { current } = fileInputRef;

        current && current.click();
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleSubmit(e);
    };

    const handleInputChange = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        dispatch(setPreviewCard({ previewTitle: e.target.value }));
        handleChange(e);
    };

    return (
        <Form size="large" className="form-holder" onSubmit={handleOnSubmit}>
            <Form.Input
                id="category-name-input"
                name="name"
                label="Category name"
                placeholder="Category name"
                value={name}
                onChange={handleInputChange}
                error={touched.name && errors.name}
                className="input-holder"
                fluid
            />

            <Form.Field>
                <Button
                    id="category-photo-btn"
                    content="Choose Photo"
                    labelPosition="left"
                    icon="file"
                    type="button"
                    onClick={handleClick}
                />

                <input
                    id="category-photo-input"
                    ref={fileInputRef}
                    name="photo"
                    type="file"
                    hidden
                    onChange={fileChange}
                />

                {photo && photo.name && <div className="label-text">{photo.name}</div>}

                {touched.photo && errors.photo && (
                    <Message negative size="mini">
                        {errors.photo}
                    </Message>
                )}
            </Form.Field>

            <BtnSection formProps={props} />
        </Form>
    );
};

export default CategoryForm;

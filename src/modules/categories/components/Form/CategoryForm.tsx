import React, {BaseSyntheticEvent, useRef} from 'react';
import { Button, Form, Message } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import BtnSection from "../BtnSection/BtnSection";
import { setPreviewCard } from "../../actions";
import {CategoryFormTypes} from "../../types";

const CategoryForm = (props: CategoryFormTypes) => {
    const dispatch = useDispatch();

    const {
        values: { name },
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldValue,
    } = props;

    const fileInputRef = useRef<HTMLInputElement>(null);

    const fileChange = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

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

        setFieldValue("photo", e.currentTarget.files[0]);
    };

    const handleClick = () => {
        const { current } = fileInputRef;

        current && current.click();
    };

    const handleOnSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        handleSubmit(e);
    };

    const handleInputChange = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        dispatch(setPreviewCard({ previewTitle: e.target.value }));
        handleChange(e);
    };

    return (
        <Form
            size="large"
            className="form-holder"
            onSubmit={handleOnSubmit}
            fluid
        >
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
                {touched.photo && errors.photo &&
                    <Message
                        negative
                        size='mini'
                    >
                        {errors.photo}
                    </Message>
                }
            </Form.Field>

            <BtnSection formProps={props} />
        </Form>
    );
};

export default CategoryForm;

import { isEmpty } from 'lodash';
import React, {useRef} from 'react';
import { Button, Form, Segment } from "semantic-ui-react";

const CategoryForm = (props: any) => {
    const {
        values: { name },
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldValue,
    } = props;

    const fileInputRef = useRef<HTMLInputElement>(null);

    const fileChange = (e: any) => {
        setFieldValue("photo", e.currentTarget.files[0]);
    };

    const handleClick = () => {
        const { current } = fileInputRef;

        current && current.click();
    };

    const handleOnSubmit = (e: any) => {
        e.preventDefault();

        handleSubmit();
    };

    return (
        <Form size="large" onSubmit={handleOnSubmit}>
            <Segment stacked>
                <Form.Input
                    id="category-name-input"
                    name="name"
                    label="Category name"
                    placeholder="Category name"
                    value={name}
                    onChange={handleChange}
                    error={touched.name && errors.name}
                />
                <Form.Field>
                    <Button
                        id="category-photo-btn"
                        content="Choose Photo"
                        labelPosition="left"
                        icon="file"
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
                        <div>{errors.photo}</div>
                    }
                </Form.Field>
                <Button
                    type="submit"
                    className="login-button"
                    size="large"
                    disabled={!isEmpty(errors)}
                >
                    Add
                </Button>
            </Segment>
        </Form>
    );
};

export default CategoryForm;

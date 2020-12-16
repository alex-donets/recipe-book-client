import React, {BaseSyntheticEvent, Component, SyntheticEvent} from 'react';
import {Button, DropdownProps, Form, Icon} from "semantic-ui-react";
import {reduxForm, Field, InjectedFormProps, isInvalid, formValueSelector} from 'redux-form';

import {MEASURES} from "../../constants";
import {IngredientFormValues} from "../../types";
import {connect} from "react-redux";
import {addIngredient} from "../../actions";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";
import {formValidationSchema} from "./constants";
import {validator} from '../../helpers'

class IngredientForm extends Component<InjectedFormProps<IngredientFormValues>> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { valid, submitting, handleSubmit, error } = this.props;

            return (
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Field
                            component={Input}
                            name='name'
                            label='Ingredient name'
                            placeholder="Ingredient name"
                            type="text"
                            width={10}
                        />

                        <Field
                            component={Input}
                            name='quantity'
                            label='Quantity'
                            placeholder="0"
                            type="number"
                            min={0}
                            max={999}
                            width={3}
                        />

                        <Field
                            component={Select}
                            name='measure'
                            label='Measure'
                            className="measure-select"
                            placeholder="e.g. kg"
                            type="text"
                            options={MEASURES}
                            width={3}
                        />

                        <Form.Field className="add-btn">
                            <label>Add ingredient</label>
                            <Button
                                icon
                                id="add-ingredients-btn"
                                labelPosition='right'
                                size='large'
                                type="submit"
                                onClick={handleSubmit}
                                disabled={!valid && submitting}
                            >
                                <Icon name='plus' />
                                Add
                            </Button>
                        </Form.Field>
                    </Form.Group>

                    {error && (
                        <div className="error-text">
                            Error
                        </div>
                    )}
                </Form>
            )}

}

const mapStateToProps = (state: any) => {
    const { ingredients: { ingredientList }, reduxForm } = state;

    return { ingredientList, reduxForm }
};

const ingredientForm = connect(
    mapStateToProps,
    { addIngredient },
)(IngredientForm);

export default reduxForm<IngredientFormValues>({
    form: 'IngredientsForm',
    asyncValidate: validator(formValidationSchema),
    enableReinitialize: true,
})(ingredientForm);


import { WrappedFieldProps } from 'redux-form';

export interface IngredientFormValues {
    id?: string;
    name: string;
    quantity: number;
    measure: string;
}

export interface IngredientFormProps {
    onSubmit?: (formData: IngredientFormValues) => void;
}

export interface IngredientState {
    ingredientList: IngredientFormValues[];
    errors: string | null;
}

export interface SelectFieldProps extends WrappedFieldProps {
    options: SelectOption[];
}

export interface SelectOption {
    id: number;
    key: number;
    text: string;
    value: string;
}

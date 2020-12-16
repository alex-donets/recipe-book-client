import { FormReducer } from "redux-form/lib/reducer";

export interface IngredientFormValues {
    id?: string,
    name: string,
    quantity: number,
    measure: string,
};

export interface IngredientState {
    ingredientList: IngredientFormValues[],
    form: FormReducer,
    errors: string | null,
};


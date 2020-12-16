import { createSelector } from "reselect";
import { RootReducerTypes } from "../../core/redux/types";

export const getState = ({ ingredients }: RootReducerTypes) => ingredients;

export const getIngredientList = createSelector([getState], ({ ingredientList }) => ingredientList);

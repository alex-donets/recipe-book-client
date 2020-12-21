import { Recipe, QueryAddRecipe, QueryUpdateRecipe } from './types';
import { getAuthToken } from '../../utils/localStorage';
import { IngredientFormValues } from '../ingredients/types';

export const formToQueryAdd = (
    { name, photo, categoryId, directions }: QueryAddRecipe,
    ingredientList: IngredientFormValues[],
) => {
    const data = new FormData();
    const userInfo = getAuthToken();
    const ingredients = JSON.stringify(ingredientList);

    data.append('name', name);
    data.append('categoryId', categoryId);
    data.append('file', photo);
    data.append('userId', userInfo.id);
    data.append('directions', directions);
    data.append('ingredients', ingredients);

    return data;
};

export const formToQueryUpdate = (
    { name, photo, categoryId, directions }: QueryUpdateRecipe,
    ingredientList: IngredientFormValues[],
) => {
    const data = new FormData();
    const userInfo = getAuthToken();
    const ingredients = JSON.stringify(ingredientList);

    data.append('name', name);
    data.append('categoryId', categoryId);
    photo && data.append('file', photo);
    data.append('userId', userInfo.id);
    data.append('directions', directions);
    data.append('ingredients', ingredients);

    return data;
};

export const queryToForm = ({ name, ...restProps }: Recipe) => ({
    name,
    ...restProps,
});

export const listPerPage = (list: Recipe[] | null, activePage: number, itemsPerPage: number) => {
    if (list) {
        const startIndex = itemsPerPage * (activePage - 1);
        const indexes = [...Array(itemsPerPage)].map((item, ind) => ind + startIndex);

        return list.filter((item, ind) => indexes.includes(ind));
    }

    return [];
};

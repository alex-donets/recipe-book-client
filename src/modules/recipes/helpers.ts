import {Recipe, QueryAddRecipe, QueryUpdateRecipe, UpdateRecipe} from "./types";
import {getAuthToken} from "../../utils/localStorage";

export const formToQueryAdd = ({
    name,
    photo,
    categoryId,
    directions,
}: QueryAddRecipe) => {
    const data = new FormData();
    const userInfo = getAuthToken();

    data.append('name', name);
    data.append('categoryId', categoryId);
    data.append('file', photo);
    data.append('userId', userInfo.id);
    data.append('directions', directions);

    return data;
};

export const formToQueryUpdate = ({
    name,
    photo,
    categoryId,
    directions
}: QueryUpdateRecipe) => {
    const data = new FormData();
    const userInfo = getAuthToken();

    // @ts-ignore
    data.append('name', name);
    // @ts-ignore
    data.append('categoryId', categoryId);
    // @ts-ignore
    data.append('file', photo);
    data.append('userId', userInfo.id);
    // @ts-ignore
    data.append('directions', directions);

    return data;
};

export const queryToForm = ({ name, ...restProps }: Recipe) => ({
    name,
    ...restProps
});

export const listPerPage = (
    list: Recipe[],
    activePage: number,
    itemsPerPage: number
) => {
    const startIndex = itemsPerPage * (activePage - 1);
    const indexes = [...Array(itemsPerPage)].map((item, ind) => ind + startIndex);

    return list.filter((item, ind) => indexes.includes(ind));
};

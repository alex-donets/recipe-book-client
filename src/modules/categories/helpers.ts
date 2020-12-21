import { Category, QueryAddCategory, QueryUpdateCategory } from './types';

export const formToQueryAdd = ({ name, photo }: QueryAddCategory) => {
    const data = new FormData();

    data.append('name', name);
    data.append('file', photo);

    return data;
};

export const formToQueryUpdate = ({ name, photo }: QueryUpdateCategory) => {
    const data = new FormData();

    name && data.append('name', name);
    photo && data.append('file', photo);

    return data;
};

export const queryToForm = ({ name, ...restProps }: Category) => ({
    name,
    ...restProps,
});

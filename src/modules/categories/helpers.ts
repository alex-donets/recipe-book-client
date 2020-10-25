export const formToQueryAdd = ({ name, photo }: any) => ({
    name,
    photo,
});

export const formToQueryUpdate = ({ name, photo }: any) => ({
    name,
    photo,
});

export const queryToForm = ({ name, photo, ...restProps }: any) => ({
    name,
    photo,
    ...restProps
});

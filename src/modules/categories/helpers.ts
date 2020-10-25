export const formToQueryAdd = ({ name, photo }: any) => {
    const data = new FormData();

    data.append('name', name);
    data.append('file', photo);

    return data;
};

export const formToQueryUpdate = ({ name, photo }: any) => ({
    name,
    photo,
});

export const queryToForm = ({ name, photo, ...restProps }: any) => ({
    name,
    photo,
    ...restProps
});

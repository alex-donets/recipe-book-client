export const registerFormToQuery = ({
    name,
    email,
    password,
    agreeTaC
}: any) => ({
    username: name,
    email,
    password,
    agreeTaC
});

export const loginFormToQuery = ({
    email,
    password,
}: any) => ({
    email,
    password,
});

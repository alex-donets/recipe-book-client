export const registerFormToQuery = ({
    name,
    email,
    password,
    agreeTaC
}: any) => ({
    fullName: name,
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

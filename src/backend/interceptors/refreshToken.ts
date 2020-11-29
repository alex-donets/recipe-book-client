import { logout } from "../../modules/auth/actions";

import { store } from "../../core/redux/store";
import { setErrorMessage } from "../../modules/app/actions";
import {AxiosError, AxiosResponse} from "axios";

const successHandler = (response: AxiosResponse) => response;

const errorHandler = (error: AxiosError) => {
    const { dispatch } = store;

    if (error.response && error.response.status === 401) {
        dispatch(logout());
    }

    if (error.response && error.response.status.toString().startsWith('4')) {
        const { data } = error.response;
        if (data.msg) {
          dispatch(setErrorMessage(data.msg));
        }
    }

    return Promise.reject(error)
};

export default { successHandler, errorHandler };

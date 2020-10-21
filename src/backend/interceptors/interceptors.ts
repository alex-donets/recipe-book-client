import { apiClient } from "../services";

import injectToken from "./injectToken";
import refreshToken from "./refreshToken";

const requestInterceptors = [ {...injectToken} ];
const responseInterceptors = [ {...refreshToken} ];

const runAllInterceptors = () => {
  requestInterceptors.forEach(({ successHandler, errorHandler }) => apiClient.interceptors.request.use(
    successHandler,
    errorHandler
  ));

  responseInterceptors.forEach(({ successHandler, errorHandler }) => apiClient.interceptors.response.use(
    successHandler,
    errorHandler
  ));
};

export { requestInterceptors, responseInterceptors, runAllInterceptors };

import set from "lodash/set";

import { getAuthToken } from "../../utils/localStorage";
import { AxiosError, AxiosRequestConfig } from "axios";

const successHandler = (config: AxiosRequestConfig) => {
  const authToken = getAuthToken();

  if (authToken) {
    set(config, 'headers.X-Token', authToken.token);
  }

  return config;
};

const errorHandler = (error: AxiosError) => Promise.reject(error);

export default { successHandler, errorHandler };

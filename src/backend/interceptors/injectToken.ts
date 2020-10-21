import set from "lodash/set";

import { getAuthToken } from "../../utils/localStorage";

const successHandler = (config: any) => {
  const authToken = getAuthToken();

  if (authToken) {
    set(config, 'headers.X-Token', authToken.token);
  }

  return config;
};

const errorHandler = (error: any) => Promise.reject(error);

export default { successHandler, errorHandler };

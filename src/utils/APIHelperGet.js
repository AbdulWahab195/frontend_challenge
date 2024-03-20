import { makeRequest } from "./APIHelper";

// for get request
const getRequest = async (path, loaderFlag, apiType) => {
  const options = { path: path, method: "GET" };

  // eslint-disable-next-line no-return-await
  return await makeRequest(options, loaderFlag, apiType);
};
export default getRequest;
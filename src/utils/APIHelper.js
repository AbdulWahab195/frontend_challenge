export const makeRequest = async (opts, loaderFlag, apiType) => {

  const headers = {};
  if (opts.contentType) {
    headers["Content-Type"] = opts.contentType;
  }
  const options = {
    ...opts,
    headers,
  };

  try {
    let response = await fetch(options.path, options);

    const data = await response.json();
    return {
      ok: response.ok,
      status: response.status,
      payload: data,
    };
  } catch (error) {
    return error;
  }
};
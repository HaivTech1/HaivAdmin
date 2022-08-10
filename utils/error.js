export const getError = (err) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;

export const sendError = (error) => {
  if (error?.response?.data) {
    return error.response.data;
  }
  return { success: false, error: error.message };
};

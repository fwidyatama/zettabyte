export const successResponse = (
  statusCode,
  data,
  message = 'Success',
  success = true
) => ({
  statusCode,
  success,
  message,
  data,
});

export const errorResponse = (
  statusCode,
  error_messages = [],
  message = 'Failed',
  success = false
) => {
  console.log(error_messages);

  return {
    statusCode,
    success,
    message,
    error_messages,
  };
};

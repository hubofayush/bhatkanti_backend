// Custom error class for API errors, extending the built-in Error class
class ApiError extends Error {
  /**
   * Creates an instance of ApiError.
   * @param {string} message - Error message (default: "something went wrong")
   * @param {number} statusCode - HTTP status code
   * @param {string} [stack] - Optional stack trace
   * @param {Array} [errors] - Optional array of error details
   * @param {any} [data] - Optional additional data to include with the error
   */
  constructor(
    message = "something went wrong",
    statusCode = 500,
    stack = "",
    errors = [],
    data = null
  ) {
    super(message); // Call the parent Error constructor
    this.message = message; // Set the error message
    this.statusCode = statusCode; // Set the HTTP status code
    this.errors = errors; // Set the error details array
    this.data = data; // Set additional data if provided
    this.success = false; // Indicate the request was not successful

    // Set the stack trace
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export ApiError for use in other files
export { ApiError };
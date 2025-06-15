// Class to standardize API responses
class ApiResponse {
  /**
   * Creates an instance of ApiResponse.
   * @param {string} message - Response message (default: "success")
   * @param {number} statusCode - HTTP status code
   * @param {any} data - Data to include in the response
   * @param {object} [meta] - Optional metadata (e.g., pagination info)
   */
  constructor(message = "success", statusCode = 200, data = null, meta = null) {
    this.message = message; // Set the response message
    this.statusCode = statusCode; // Set the HTTP status code
    this.data = data; // Set the response data
    this.success = statusCode < 400; // Set success to true if status code is less than 400
    if (meta) {
      this.meta = meta; // Optional metadata for extra info
    }
    this.timestamp = new Date().toISOString(); // Add a timestamp for the response
  }
}

// Export ApiResponse for use in other files
export { ApiResponse };

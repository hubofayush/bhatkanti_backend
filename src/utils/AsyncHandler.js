// AsyncHandler is a higher-order function to handle errors in async Express routes
const AsyncHandler = (fun) => {
  // Return a new function that Express will use as a route handler
  return (req, res, next) => {
    // Call the async function and catch any errors, passing them to Express error handler
    Promise.resolve(fun(req, res, next)).catch((err) => next(err));
  };
};

// Export AsyncHandler for use in other files
export { AsyncHandler };

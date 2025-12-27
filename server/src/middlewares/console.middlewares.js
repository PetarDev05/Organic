export const consoleMiddleware = (req, res, next) => {
  console.log(`REQUEST PATH: ${req.path}\nREQUEST METHOD: ${req.method}`);
  next();
};

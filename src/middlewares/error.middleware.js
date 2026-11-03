/**
 * @type {import('express').ErrorRequestHandler}
 * @param {Error} err Error object.
*/
const errorHandler = (err, req, res, next) => {
  console.log({error: err.message, status: err.status || err.statusCode || err.code });

  if (req.headersSent) return next(err);
  if (err.code) return res.status(500).json({ error: 'Internal server error' });

  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal server error';

  res.status(status).json({ error: message });
};

export default errorHandler;

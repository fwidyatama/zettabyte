function errorHandler(err, req, res, next) {
  switch (true) {
    case typeof err === 'string':
      const is404 = err.toLowerCase().endsWith('not Found');
      const statusCode = is404 ? 404 : 400;
      return res.status(statusCode).json({ err });
    case err.name === 'ValidationError':
      return res.status(400).json({ err: err.message });
    case err.name === 'UnauthorizedError':
      return res.status(401).json({ err: 'Invalid Token.' });
    default:
      return res.status(500).json({ err: err.message });
  }
}

export default errorHandler;

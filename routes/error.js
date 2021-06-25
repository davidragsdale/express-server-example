export default (err, req, res, next) => {
  console.log('ERROR!', err);
  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  res.send(`ERROR: ${err}`);
};

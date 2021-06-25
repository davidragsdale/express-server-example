export default (req, res) => {
  const payload = {
    userId: 1,
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(payload));
  return res;
};

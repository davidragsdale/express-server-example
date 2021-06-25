export default (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello, world!');
  return res;
};

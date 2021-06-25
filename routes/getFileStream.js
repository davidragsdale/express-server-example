import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const getStaticPath = (filePath) => path.join(fileURLToPath(import.meta.url), '../../static', filePath);

export default (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  const filePath = getStaticPath('big_file.txt');
  fs.createReadStream(filePath).pipe(res);
};

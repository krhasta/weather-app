import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈에서 __dirname을 구현
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist'))); // 여기서 'dist' 디렉토리를 지정해야 합니다.

app.listen(8080, function () {
  console.log('listening on 8080!');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/getUserIP', (req, res) => {
  let userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (userIP === '::1') {
    userIP = '125.135.79.166';
    console.log(userIP);
  }
  res.send(userIP);
});

import http from 'http';
import ngrok from '@ngrok/ngrok';

// Create webserver
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Congrats you have created an ngrok web server');
  })
  .listen(7777, () => console.log('Node.js web server at 7777 is running...'));
// ngrok 서버는 7777 포트에 열고
// ngrok.connect에서 이미 열려있는 8080에 연결한다. 시이발

// Get your endpoint online
ngrok
  .connect({ addr: 8080, authtoken: '2lLWsqVXJlcERPMfr7XT7xUSmkR_5e6nM8zd4Kk3PE7fMPj8F' })
  .then((listener) => console.log(`Ingress established at: ${listener.url()}`));

export default async function getIP(setIP) {
  const response = await fetch('/getUserIP', {
    method: 'GET',
    redirect: 'follow',
  });
  const aaa = await response.text();
  setIP(aaa);
}

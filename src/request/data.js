import axios from 'axios';

export default function getdata(serverURL) {
  const meta = axios.get(`${serverURL}/api/meta`);
  return JSON.parse(meta);
}

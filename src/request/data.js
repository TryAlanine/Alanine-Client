import axios from 'axios';

export default function getdata(serverURL) {
  const dataURL = `${serverURL}`;
  const data = axios.get(dataURL);
  return JSON.parse(data);
}

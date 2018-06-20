import axios from 'axios';

export default function getmetaData(serverURL) {
  const metaDataURL = `${serverURL}`;
  const data = axios.get(metaDataURL);
  return JSON.parse(data);
}

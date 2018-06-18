import md5 from 'md5';
import { el } from 'redom';

const OFFICIAL_URL = 'https://www.gravatar.com/avatar/';
const V2EX_CDN = 'https://cdn.v2ex.com/gravatar/';

export default function getGravatarImg(email, cdn, defaultImg) {
  // calculate email hash
  const hash = md5(email);
  // construct request url
  let url = `${cdn ? V2EX_CDN : OFFICIAL_URL}${hash}?s=40`;
  if (defaultImg) {
    url = `${url}&d=${encodeURI(defaultImg)}`;
  }
  // create img element and return
  return el('img', { src: url });
}

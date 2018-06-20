import { el, text } from 'redom';

export default function constructInfoDOM(metaData) {
  return el('div', [
    el('span', metaData.count),
    text(' 评论'),
  ]);
}

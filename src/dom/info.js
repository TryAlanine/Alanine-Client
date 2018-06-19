import { el, text } from 'redom';

export default function constructInfoDOM(metadata) {
  return el('div', [
    el('span', metadata.count),
    text(' 评论'),
  ]);
}

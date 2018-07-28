import { el, text } from 'redom';

export default function constructInfoDOM(data) {
  return el('div', [
    el('span', data.count),
    text(' 评论'),
  ]);
}

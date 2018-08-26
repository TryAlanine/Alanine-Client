import { el, text } from 'redom';

export default function constructInfoDOM(commentsCount) {
  return el('div', [
    el('span', commentsCount),
    text(' 评论'),
  ]);
}

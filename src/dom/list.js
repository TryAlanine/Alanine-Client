import { el } from 'redom';

import getGarvatarImg from '@/utility/gravatar';

/*
cardData {
  email,
  nickName,
  ua {
    browser,
    os,
  },
  content,
  time,
}
*/

function constrcutCardDOM(cardData) {
  const gravatar = getGarvatarImg(cardData.email);
  const header = el('div', [
    el('span', cardData.nickName),
    el('span', cardData.ua.browser),
    el('span', cardData.ua.os),
  ]);
  const content = el('div', el('p', cardData.content));
  const footer = el('div', [
    el('span', cardData.time),
    el('span', '回复'),
  ]);
  return el(`li.alanine-card#${cardData.id}`, [
    gravatar,
    el('section', [
      header,
      content,
      footer,
    ]),
  ]);
}

export default function constructListDOM(data) {
  return el('ul', data.comments.map(constrcutCardDOM));
}

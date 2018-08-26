import { el } from 'redom';

import getGarvatarImg from '@/utils/gravatar';

/*
cardData {
  id,
  email,
  usernaem,
  ua {
    browser,
    os,
  },
  content,
  time,
  isUpdated,
}
*/

function constrcutCardDOM(cardData) {
  const gravatar = getGarvatarImg(cardData.email);
  const header = el('div', [
    el('span', cardData.username),
    el('span', cardData.ua.browser),
    el('span', cardData.ua.os),
  ]);
  const content = el('div');
  content.innerHTML = cardData.content;
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

export default function constructListDOM(list) {
  return el('ul', list.map(constrcutCardDOM));
}

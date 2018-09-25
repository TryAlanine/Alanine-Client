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

const timeOptions = { year: 'numeric', month: 'long', day: 'numeric' };

function constrcutCardDOM(cardData) {
  const gravatar = getGarvatarImg(cardData.email);
  const header = el('div.alanine-card-info', [
    el('a', { href: cardData.link ? cardData.link : `mailto:${cardData.email}` }, el('span', cardData.username)),
    el('span', cardData.ua.browser),
    el('span', cardData.ua.os),
  ]);
  const content = el('div.alanine-card-content');
  content.innerHTML = cardData.content;
  const time = (new Date(cardData.time)).toLocaleDateString(timeOptions);
  const footer = el('div.alanine-card-footer', [
    el('span.alanine-card-time', time),
    el('span.alanine-card-rebtn', '回复'),
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
  return el('ul.alanine-list', list.map(constrcutCardDOM));
}

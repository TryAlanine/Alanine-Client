import { el } from 'redom';

import getGarvatarImg from '@/utility/gravatar';

/*
cardData {
  gravatarEmail,
  nickName,
  browser,
  system,
  content,
  time
}
*/

function constrcutCardDOM(cardData) {
  const gravatar = getGarvatarImg(cardData.gravatarEmail);
  const header = el('div', [
    el('span', cardData.nickName),
    el('span', cardData.browser),
    el('span', cardData.system),
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

export default function constructListDOM(metaData) {
  return el('ul', metaData.comments.map(constrcutCardDOM));
}

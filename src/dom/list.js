import { el, text } from 'redom';

function constrcutCardDOM(carddata) {
  //
}

export default function constructListDOM(metadata) {
  return el('ul', metadata.comments.map(constrcutCardDOM));
}

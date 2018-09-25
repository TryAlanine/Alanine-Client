import { el } from 'redom';

import constructMainDOM from './main';
import constructInfoDOM from './info';
import constructListDOM from './list';
import constructFooterDOM from './footer';

export default function constructDOM(data) {
  return el('div.alanine', [
    constructMainDOM(data),
    constructInfoDOM(data.comments.count),
    constructListDOM(data.comments.list),
    constructFooterDOM(data),
  ]);
}

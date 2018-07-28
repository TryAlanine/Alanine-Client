import { el } from 'redom';

import constructMainDOM from './main';
import constructInfoDOM from './info';
import constructListDOM from './list';
import constructFooterDOM from './footer';

export default function constructDOM(data) {
  return el('div.alanine-wrapper', [
    constructMainDOM(data),
    constructInfoDOM(data),
    constructListDOM(data),
    constructFooterDOM(data),
  ]);
}

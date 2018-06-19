import { el } from 'redom';

import constructMainDOM from './main';
import constructInfoDOM from './info';
import constructListDOM from './list';
import constructFooterDOM from './footer';

export default function constructDOM(metadata) {
  return el('div.alanine-wrapper', [
    constructMainDOM(metadata),
    constructInfoDOM(metadata),
    constructListDOM(metadata),
    constructFooterDOM(metadata),
  ]);
}

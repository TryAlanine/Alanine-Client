import { el } from 'redom';

import constructMainDOM from './main';
import constructInfoDOM from './info';
import constructListDOM from './list';
import constructFooterDOM from './footer';

export default function constructDOM(metaData) {
  return el('div.alanine-wrapper', [
    constructMainDOM(metaData),
    constructInfoDOM(metaData),
    constructListDOM(metaData),
    constructFooterDOM(metaData),
  ]);
}

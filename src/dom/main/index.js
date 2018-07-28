import { el } from 'redom';

import constructHeaderDOM from './header';
import constructEditorDOM from './editor';
import constructControllerDOM from './controller';

export default function constructAlanineDOM(metaData) {
  return el('div.alanine-main', [
    constructHeaderDOM(metaData),
    constructEditorDOM(metaData),
    constructControllerDOM(metaData),
  ]);
}

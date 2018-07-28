import { el } from 'redom';

import constructHeaderDOM from './header';
import constructEditorDOM from './editor';
import constructControllerDOM from './controller';

export default function constructMainDOM(data) {
  return el('div.alanine-main', [
    constructHeaderDOM(data),
    constructEditorDOM(data),
    constructControllerDOM(data),
  ]);
}

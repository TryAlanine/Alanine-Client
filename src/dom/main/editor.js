import { el } from 'redom';

export default function constructEditorDOM({ placeholder }) {
  return el('div.alanine-editor', el('textarea.alanine-editarea', { placeholder }));
}

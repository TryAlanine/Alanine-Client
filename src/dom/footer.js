import { el, text } from 'redom';

export default function constructFooterDOM(metaData) {
  return el('div', [
    text('Powered By '),
    el('a', text('Alanine'), { href: 'github.com/TryAlanine/Alanine', target: '_blank' }),
    el('br'),
    text(`v${metaData.version}`),
  ]);
}

import { el, text } from 'redom';

export default function constructFooterDOM(data) {
  return el('div.alanine-footer', [
    text('Powered By '),
    el('a', text('Alanine'), { href: '//github.com/TryAlanine/Alanine', target: '_blank' }),
    el('br'),
    text(`v${data.version}`),
  ]);
}

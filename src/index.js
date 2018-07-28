/* eslint-disable */

import * as redom from 'redom';
import axios from 'axios';
import qs from 'qs';

import dom from '@/dom';

import '@/scss/index.scss';

const CLIENT_VERSION = '0.0.0';

export default class Alanine {
  constructor(options) {
    this._version = CLIENT_VERSION;
    this.redom = redom;
    this.axios = axios;
    this.qs = qs;
  }

  mount(el) {
    redom.mount(el, dom(this.data));
  }
}

/*
init:
request meta data ->
construct dom ->
bind event ->
mount dom
*/

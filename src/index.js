/* eslint-disable */

import * as redom from 'redom';
import axios from 'axios';
import qs from 'qs';
import marked from 'marked';

import dom from '@/dom';

import apimap from '@/utils/apimap';

import '@/scss/index.scss';

const CLIENT_VERSION = '0.0.0';

export default class Alanine {
  constructor(options) {
    this._version = CLIENT_VERSION;
    this.redom = redom;
    this.axios = axios;
    this.qs = qs;
    this.marked = marked;
    this.options = options;
    this.post = 'asd';
    this.data = {
      comments: {
        list: [
          {
            id: 'kjnvoasaoskoifns',
            email: 'leaferx@outlook.com',
            username: 'LEAFERx',
            ua: {
              browser: 'Chrome',
              os: 'Windows 10',
            },
            content: '<b>test</b>',
            time: Date.now(),
            isUpdated: false,
          },
          {
            id: 'ovubasojfpuwbjvkj',
            email: 'leaf3rx@gmail.com',
            username: 'Lawrence YE',
            ua: {
              browser: 'Safari',
              os: 'OS X',
            },
            content: '<b>test</b>',
            time: Date.now(),
            isUpdated: true,
          }
        ],
        count: 2,
      }
    };
    this.init();
  }

  async init() {
    await this.fetchConfig();
    await this.fetchPostInfo();
    await this.fetchComments();
    if (this.options.el) {
      this.mount(this.options.el);
    }
  }

  async fetchConfig() {
    const api = apimap('SERVER_CONFIG', {
      server: this.options.server,
    })
    this.serverConfig = (await axios.get(api)).data;
  }

  async fetchPostInfo() {
    const api = apimap('POST_INFO', {
      server: this.options.server,
      psot: this.post,
    })
    this.postInfo = (await axios.get(api)).data;
  }

  async fetchComments() {
    const api = apimap('COMMENTS', {
      server: this.options.server,
      post: this.post,
    })
    this.comments = (await axios.get(api)).data;
  }

  mount(el) {
    if (typeof el === 'string') {
      redom.mount(document.querySelector(el), dom(this.data));
    } else {
      redom.mount(el, dom(this.data));
    }
  }
}

/*
init:
request meta data ->
construct dom ->
bind event ->
mount dom
*/

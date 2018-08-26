const apimap = {
  SERVER_CONFIG: ({ server }) => `${server}/config`,
  POST_INFO: ({ server, post }) => `${server}/posts/${post}`,
  COMMENTS: ({ server, post }) => `${server}/posts/${post}/comments`,
};

export default function (api, payload) {
  return apimap[api](payload);
}

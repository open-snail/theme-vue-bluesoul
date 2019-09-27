import request from "@/utils/request";

export function fetchArticleList(query) {
  return request({
    url: "/posts/posts/v1/list",
    method: "get",
    params: query
  });
}

export function fetchArticle(id) {
  return request({
    url: `/posts/posts/v1/${id}`,
    method: "get"
  });
}

export function fetchLinkList(query) {
  return request({
    url: "/link/link/v1/list",
    method: "get",
    params: query
  });
}

export function fetchTagsList(query) {
  return request({
    url: "/tags/tags-article-quantity/v1/list",
    method: "get",
    params: query
  });
}

export function fetchCategoryList(query) {
  return request({
    url: "/category/category/v1/list",
    method: "get",
    params: query
  });
}

export function fetchArchiveTotalByDateList(query) {
  return request({
    url: "/posts/archive/v1/list",
    method: "get",
    params: query
  });
}

export function fetchConfigList(params) {
  return request({
    url: "/config/config-base/v1/list",
    method: "get",
    params
  });
}

export function fetchMasterInfo() {
  return request({
    url: "/auth/master/v1/get",
    method: "get"
  });
}

export function logout() {
  return request({
    url: "/auth/auth/v1/logout",
    method: "post"
  });
}

export function getOauthLoginByGithub(params) {
  return request({
    url: "/auth/github/v1/get",
    method: "get",
    params
  });
}

export function login(data) {
  return request({
    url: "/auth/user/v1/login",
    method: "post",
    data
  });
}

export function getInfo(token) {
  return request({
    url: "/auth/user/v1/get",
    method: "get",
    headers: {
      Authorization: token
    }
  });
}

export function savePostsComments(data) {
  return request({
    url: "/comments/comments/v1/add",
    method: "post",
    data
  });
}

export function getPostsCommentsList(params) {
  return request({
    url: "/comments/comments-posts/v1/list",
    method: "get",
    params
  });
}

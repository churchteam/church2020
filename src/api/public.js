import request from "@utils/request";

/**
 * 查看详情
 * @returns {*}
 */
export function getIPlayData(params) {
  return request.get("/iplay.php", params);
}
// 日常+福音
export function getData(params) {
  return request.get("/receiever.php", params);
}

/**
 * 注册请求接口---教会
 * @returns {*}
 */
export function getArticleBanner() {
  return request.get("/article/banner/list", {});
}

/**
 * 增删修改
 * @returns {*}
 */
export function getUserList(params) {
  return request.get("/receiever.php", params);
}




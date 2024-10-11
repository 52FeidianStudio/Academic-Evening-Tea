"use strict";
const utils_http = require("../utils/http.js");
const giftIsShow = () => {
  return utils_http.http({
    method: "POST",
    url: "/system/xswc"
  });
};
const getHomeContentAPI = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/system/activity/list",
    data
  });
};
exports.getHomeContentAPI = getHomeContentAPI;
exports.giftIsShow = giftIsShow;
//# sourceMappingURL=HomeContent.js.map

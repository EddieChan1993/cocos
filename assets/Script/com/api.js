var hostTest = "https://ikun01.dcwen.top/ikuntest/";//私有
var hostPrev = "https://ikun01.dcwen.top/ikunpro/";
var isTest = true;

module.exports = {
    adminLogin: "adminLogin",
    getAppSn: "getAppSn",
    home: "home",

    //完整请求地址
    reqApiAll: function (api) {
        if (isTest) {
            return hostTest + api;
        }
        return hostPrev + api
    }
};